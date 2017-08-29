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
			try
			{
				using (StreamReader file = new StreamReader(path))
				{
          //skip first 8 lines that guide remainder of file
          for(var i = 0; i < 8; i++)
          {
            file.ReadLine();
          }

					while ((line = file.ReadLine()) != null)
					{
            events.Add(new Event()
            {
              Id = "event" + id,
              Title = line.Trim(),
              ShortDesc = file.ReadLine().Trim(),
              LongDesc = file.ReadLine().Trim(),
              ImageName = file.ReadLine().Trim(),
              TemplateUrl = file.ReadLine().Trim(),
              DisplayDate = DateTime.Parse(file.ReadLine().Trim()),
              StartDate = DateTime.Parse(file.ReadLine().Trim()),
              EndDate = DateTime.Parse(file.ReadLine().Trim())
            });
						id++;
					}
				};
			}
			catch (Exception ex)
			{
				
			}

      return events.Where(e => e.EndDate > DateTime.Today.AddDays(-1) && e.DisplayDate <= DateTime.Today);
		}
	}
}
