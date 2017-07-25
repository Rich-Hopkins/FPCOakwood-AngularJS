using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using FPC.WebApi.Models;

namespace FPC.WebApi.Controllers
{
	public class EventsController : ApiController
	{
		private List<Event> events = new List<Event>()
		{
			new Event{Id = "vbs", Title = "VBS", Description = "VBS Description for front page, short paragraph.", PageUrl = "vbs.html",ThumbUrl = "../../assets/images/vbs_thumb.png", ExpDateTime = new DateTime(2017,8,16)},
			new Event {Id="fireworks", Title = "Fireworks!", Description = "It's time for fireworks again! (Front page)", PageUrl = "fireworks.html", ThumbUrl = "../../assets/images/fireworks-explosion-thumb.jpg", ExpDateTime = new DateTime(2017,7,4)}
		};

		public IEnumerable<Event> GetAllEvents()
		{
			return events.Where(e => e.ExpDateTime > DateTime.Today.AddDays(-1));
		}
	}
}
