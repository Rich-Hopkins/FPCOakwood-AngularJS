using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using Newtonsoft.Json;
using System.Threading.Tasks;
using System.Web.Configuration;
using System.Web.Http;
using FPC.WebApi.Models;


namespace FPC.WebApi.Controllers
{
    public class GalleryController : ApiController
    {
        private string flickrKey;
        private string flickrSecret;
        private string flickrUser;
        private string flickrUrl;

        public async Task<string> Get()
        {
            flickrKey = "907ae705e443e08df594689643f378f9";// WebConfigurationManager.AppSettings["FlickrKey"];
            flickrSecret = WebConfigurationManager.AppSettings["FlickrSecret"];
            flickrUser = "140777947@N07";// WebConfigurationManager.AppSettings["FlickrUserID"];
            flickrUrl = @"https://api.flickr.com/services/rest";


            var result = await GetAlbums();
            //var model = JsonConvert.DeserializeObject(result);
            return result;
        }

        private Task<string> GetAlbums()
        {
            var method = "flickr.photosets.getList";
            var parameters = String.Format("?method={0}&api_key={1}&format=json&user_id={2}",
                method, flickrKey, flickrUser);
            var client = new HttpClient { BaseAddress = new Uri(flickrUrl) };
            client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
            return client.GetStringAsync(parameters);
        }
    }
}
