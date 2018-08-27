using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Configuration;
using System.Web.Http;
using FPC.WebApi.Models;
using Imgur.API;
using Imgur.API.Authentication.Impl;

namespace FPC.WebApi.Controllers
{
    public class ImgurController : ApiController
    {
        private string imgurKey;
        private string imgurSecret;
        private ImgurClient imgur;

        public IEnumerable<Photoset> Get()
        {
            imgurKey = WebConfigurationManager.AppSettings["ImgurKey"];
            imgurSecret = WebConfigurationManager.AppSettings["ImgurSecret"];
            imgur = new ImgurClient(imgurKey, imgurSecret);



            return Void;
        }
    }
}
