using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Web.Configuration;
using System.Web.Http;
using System.Web.Script.Serialization;
using FPC.WebApi.Models.Albums;
using FPC.WebApi.Models.Images;

namespace FPC.WebApi.Controllers
{
    public class ImgurController : ApiController
    {

        public List<Album> Get()
        {


            try
            {
                var imgurClientId = WebConfigurationManager.AppSettings["ImgurClientId"];
                using (var client = new HttpClient())
                {
                    client.BaseAddress = new Uri("https://api.imgur.com/3/");
                    client.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Client-ID", "2d5c32e8beb66e4");
                    var albumResponse = client.GetStringAsync("account/fpcoakwood/albums").Result;
                    var albums = new JavaScriptSerializer().Deserialize<Albums>(albumResponse);
                                        
                    foreach(var album in albums.Data)
                    {
                        var imageResponse = client.GetStringAsync(string.Format("album/{0}/images", album.Id)).Result;
                        var images = new JavaScriptSerializer().Deserialize<Images>(imageResponse).Data;
                        var slideIndex = 0;
                        foreach (var image in images)
                        {
                            image.SlideIndex = slideIndex;
                            slideIndex++;
                            image.Thumb = string.Format("http://i.imgur.com/{0}t.jpg", image.Id);
                        }
                        album.Images = images;
                    }
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
