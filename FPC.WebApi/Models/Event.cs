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
		public string ShortDesc { get; set; }
    public string LongDesc { get; set; }
    public string ImageName { get; set; }
    public string TemplateUrl { get; set; }
		public DateTime DisplayDate { get; set; }
    public DateTime StartDate { get; set; }
		public DateTime EndDate { get; set; }
	}
}