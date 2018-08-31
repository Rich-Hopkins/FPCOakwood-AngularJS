using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Web.Configuration;
using System.Web.Http;
using System.Web.Script.Serialization;
using FPC.WebApi.Models.Albums;

namespace FPC.WebApi.Controllers
{
    public class ImgurController : ApiController
    {

        public List<Datum> Get()
        {


            try
            {
                var imgurClientId = WebConfigurationManager.AppSettings["ImgurClientId"];
                using (var client = new HttpClient())
                {
                    client.BaseAddress = new Uri("https://api.imgur.com/3/");
                    client.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Client-ID", "2d5c32e8beb66e4");
                    var response = client.GetStringAsync("account/fpcoakwood/albums").Result;
                    var albums = new JavaScriptSerializer().Deserialize<Albums>(response);
                    return albums.Data;
                }
            }
            catch
            {

            }
            return null;
        }
    }
}
