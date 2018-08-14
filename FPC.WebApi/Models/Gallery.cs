using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Web;

namespace FPC.WebApi.Models
{
    public class Photoset
    {
        public string Title { get; set; }
        public string Id { get; set; }
        public string Description { get; set; }
        public List<Photo> Photos { get; set; }
    }

    public class Photo
    {
        public int Id { get; set; }
        //public int SlideId { get; set; }
        public string Title { get; set; }
        //public string Description { get; set; }
        public string Thumb { get; set; }
        public string Small { get; set; }
        //public string Medium { get; set; }
        public string Large { get; set; }
    }
}