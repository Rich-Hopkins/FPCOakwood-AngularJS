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

        public async Task Get()
        {
            flickrKey = "907ae705e443e08df594689643f378f9";// WebConfigurationManager.AppSettings["FlickrKey"];
            flickrSecret = WebConfigurationManager.AppSettings["FlickrSecret"];
            flickrUser = "140777947@N07";// WebConfigurationManager.AppSettings["FlickrUserID"];
            flickrUrl = "https://api.flickr.com/services/rest";


            await GetAlbums();
        }

        private async Task GetAlbums()
        {
            var method = "flickr.photosets.getList";
            var url = string.Format(
                "https://api.flickr.com/services/rest?api_key={0}&amp;method={1}&amp;format=json&amp;user_id={2}",
                flickrKey, method, flickrUser);
            var http = new HttpClient();
            var response = await http.GetAsync(url);
            //var serializer = new DataContractJsonSerializer(typeof(RootObject));
            var str = "Done.";
        }
    }
}
