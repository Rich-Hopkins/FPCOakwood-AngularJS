﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace FPC.WebApi.Models
{
    public class GalleryImage
    {
        public string Title { get; set; }
        public string Description { get; set; }
        public string DateTaken { get; set; }
        public List<GallerySize> Urls { get; set; }
    }
}