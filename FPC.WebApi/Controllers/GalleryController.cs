using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Runtime.Serialization.Json;
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

        public async Task<IEnumerable<string>> Get()
        {
            flickrKey = "907ae705e443e08df594689643f378f9";// WebConfigurationManager.AppSettings["FlickrKey"];
            flickrSecret = WebConfigurationManager.AppSettings["FlickrSecret"];
            flickrUser = "140777947@N07";// WebConfigurationManager.AppSettings["FlickrUserID"];
            flickrUrl = "https://api.flickr.com/services/rest";


            var result = await GetAlbums();
            return new string[]{result};
        }

        private async Task<string> GetAlbums()
        {
            var method = "flickr.photosets.getList";
            var url = string.Format(
                "https://api.flickr.com/services/rest?method={0}&api_key={1}&format=json&user_id={2}",
                method, flickrKey, flickrUser);
            var http = new HttpClient();
            HttpResponseMessage response = await http.GetAsync(url);
            response.EnsureSuccessStatusCode();
            var result = await response.Content.ReadAsStringAsync();
            return result;
        }
    }
}
