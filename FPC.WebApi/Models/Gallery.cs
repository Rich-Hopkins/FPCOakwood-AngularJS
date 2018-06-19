using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace FPC.WebApi.Models
{

    public class Rootobject
    {
        public Photosets photosets { get; set; }
        public string stat { get; set; }
    }

    public class Photosets
    {
        public int page { get; set; }
        public int pages { get; set; }
        public int perpage { get; set; }
        public int total { get; set; }
        public Photoset[] photoset { get; set; }
    }

    public class Photoset
    {
        public string id { get; set; }
        public string primary { get; set; }
        public string secret { get; set; }
        public string server { get; set; }
        public int farm { get; set; }
        public int photos { get; set; }
        public int videos { get; set; }
        public Title title { get; set; }
        public Description description { get; set; }
        public int needs_interstitial { get; set; }
        public int visibility_can_see_set { get; set; }
        public string count_views { get; set; }
        public string count_comments { get; set; }
        public int can_comment { get; set; }
        public string date_create { get; set; }
        public string date_update { get; set; }
    }

    public class Title
    {
        public string _content { get; set; }
    }

    public class Description
    {
        public string _content { get; set; }
    }

}