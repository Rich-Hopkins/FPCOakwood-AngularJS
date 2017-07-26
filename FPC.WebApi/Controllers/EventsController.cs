using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;
using FPC.WebApi.Models;

namespace FPC.WebApi.Controllers
{
	public class EventsController : ApiController
	{
		public IEnumerable<Event> GetAllEvents()
		{
			List<Event> events = new List<Event>();
			string root_path = HttpRuntime.AppDomainAppPath;
			int id = 0;
			foreach (var line in File.ReadLines(root_path + "App_Data/eventdata.txt"))
			{
				var attributes = line.Split('*');
				events.Add(new Event(){Id = "event" + id, Title = attributes[0], Description = attributes[1], PageUrl = "/views/events/" + attributes[2], ThumbUrl =  attributes[3], ExpDateTime = DateTime.Parse(attributes[4])});
				id++;
			}
			return events.Where(e => e.ExpDateTime > DateTime.Today.AddDays(-1));
		}
	}
}
