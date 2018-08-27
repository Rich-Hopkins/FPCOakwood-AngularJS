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
using Imgur.API.Endpoints.Impl;
using Imgur.API.Models.Impl;

namespace FPC.WebApi.Controllers
{
    public class ImgurController : ApiController
    {

        public async System.Threading.Tasks.Task<IEnumerable<Photoset>> GetAsync()
        {


            try
            {
                var imgurClientId = WebConfigurationManager.AppSettings["ImgurClientId"];
                var imgurSecret = WebConfigurationManager.AppSettings["ImgurSecret"];
                var imgurClient = new ImgurClient(imgurClientId);
                
                var accountEndpoint = new AccountEndpoint(imgurClient);
                var albumEndpoint = new AlbumEndpoint(imgurClient);
                var imageEndpoint = new ImageEndpoint(imgurClient);
                var photosets = new List<Photoset>();
                var x = new Imgur.API.Models
                var albums = 

                foreach (var album in albums)
                {
                    var ps = new Photoset
                    {
                        Title = album.Title,
                        Id = album.Id,
                        Description = album.Description,
                        Photos = new List<Photo>()
                    };
                    photosets.Add(ps);
                }

                //foreach(var photoset in photosets)
                //{
                //    int slideId = 0;
                //    var 
                //}

                return photosets;
            }
            catch
            {

            }
            return null;
        }
    }
}
