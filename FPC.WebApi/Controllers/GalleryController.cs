using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Configuration;
using System.Web.Http;

namespace FPC.WebApi.Controllers
{
    public class GalleryController : ApiController
    {
        private string flickrKey = WebConfigurationManager.AppSettings["FlickrKey"];
        private string flickrSecret = WebConfigurationManager.AppSettings["FlickrSecret"];
        private string flickrUser = WebConfigurationManager.AppSettings["FlickrUserID"];

        public string Get()
        {
            return "The service is working.";
        }
    }
}
