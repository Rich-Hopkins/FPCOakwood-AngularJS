using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;
using System.Web.UI.WebControls;
using FPC.WebApi.Models;

namespace FPC.WebApi.Controllers
{
	public class EventsController : ApiController
	{
		public IEnumerable<Event> GetAllEvents()
		{
			List<Event> events = new List<Event>();
			string path = HttpRuntime.AppDomainAppPath + "App_Data/eventdata.txt";
			int id = 0;
			string line;
			using (StreamReader file = new StreamReader(path))
			{
				while ((line = file.ReadLine()) != null)
				{
					events.Add(new Event()
					{
						Id = "event" + id,
						Title = line,
						Description = file.ReadLine(),
						PageUrl = "/views/events/" + file.ReadLine(),
						ThumbUrl = file.ReadLine(),
						StartDate = DateTime.Parse(file.ReadLine()),
						EndDate = DateTime.Parse(file.ReadLine())
					});
					id++;
				}
			};

			return events.Where(e => e.EndDate > DateTime.Today.AddDays(-1) && e.StartDate <= DateTime.Today.AddDays(22));
		}
	}
}
