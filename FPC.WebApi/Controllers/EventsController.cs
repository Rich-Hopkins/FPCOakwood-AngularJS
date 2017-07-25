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
		//private List<Event> events = new List<Event>()
		//{
		//	new Event{Id = "vbs", Title = "VBS", Description = "VBS Description for front page, short paragraph.", PageUrl = "vbs.html",ThumbUrl = "../../assets/images/vbs_thumb.png", ExpDateTime = new DateTime(2017,8,16)},
		//	new Event {Id="fireworks", Title = "Fireworks!", Description = "It's time for fireworks again! (Front page)", PageUrl = "fireworks.html", ThumbUrl = "../../assets/images/fireworks-explosion-thumb.jpg", ExpDateTime = new DateTime(2017,7,4)}
		//};

		public IEnumerable<Event> GetAllEvents()
		{
			List<Event> events = new List<Event>();
			string root_path = HttpRuntime.AppDomainAppPath;
			foreach (var line in File.ReadLines(root_path + "App_Data/eventdata.txt"))
			{
				var attributes = line.Split('*');
				events.Add(new Event(){Id = attributes[0], Title = attributes[1], Description = attributes[2], PageUrl = attributes[3], ThumbUrl =  attributes[4], ExpDateTime = DateTime.Parse(attributes[5])});
			}
			return events.Where(e => e.ExpDateTime > DateTime.Today.AddDays(-1));
		}
	}
}
