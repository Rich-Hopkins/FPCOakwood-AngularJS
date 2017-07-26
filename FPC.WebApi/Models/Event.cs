using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace FPC.WebApi.Models
{
	public class Event
	{
		public string Id { get; set; }
		public string Title { get; set; }
		public string Description { get; set; }
		public string ThumbUrl { get; set; }
		public string PageUrl { get; set; }
		public DateTime StartDate { get; set; }
		public DateTime EndDate { get; set; }
	}
}