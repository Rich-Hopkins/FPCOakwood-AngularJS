using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using Newtonsoft.Json;
using System.Threading.Tasks;
using System.Web.Configuration;
using System.Web.Http;


namespace FPC.WebApi.Controllers
{
    public class GalleryController : ApiController
    {
        private string flickrKey;
        private string flickrSecret;
        private string flickrUser;
        private string flickrUrl;

        public async Task<object> Get()
        {
            flickrKey = "907ae705e443e08df594689643f378f9";// WebConfigurationManager.AppSettings["FlickrKey"];
            flickrSecret = WebConfigurationManager.AppSettings["FlickrSecret"];
            flickrUser = "140777947@N07";// WebConfigurationManager.AppSettings["FlickrUserID"];
            flickrUrl = @"https://api.flickr.com/services/rest";


            var result = await GetAlbums();
            return result;
        }

        private async Task<object> GetAlbums()
        {
            var method = "flickr.photosets.getList";
            var url = string.Format(
                @"{0}?method={1}&api_key={2}&format=json&user_id={3}",
                flickrUrl, method, flickrKey, flickrUser);
            var http = new HttpClient();
            HttpResponseMessage response = await http.GetAsync(url);
            response.EnsureSuccessStatusCode();
            //var result = JsonConvert.DeserializeObject(response.ToString());
            var result = response.Content.ReadAsStringAsync();
            //result = result.Replace("\\", "");
            return result;
        }
    }
}
