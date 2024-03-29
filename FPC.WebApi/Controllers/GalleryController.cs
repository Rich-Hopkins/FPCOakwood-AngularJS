﻿using System;
using System.Collections.Generic;
using System.Web.Configuration;
using System.Web.Http;
using FlickrNet;
using Photo = FPC.WebApi.Models.Photo;
using Photoset = FPC.WebApi.Models.Photoset;


namespace FPC.WebApi.Controllers
{
    public class GalleryController : ApiController
    {
        private string flickrKey;
        private string flickrUser;
        private Flickr flickr;
        
        public IEnumerable<Photoset> Get()
        {
            flickrKey = WebConfigurationManager.AppSettings["FlickrKey"];
            flickrUser = WebConfigurationManager.AppSettings["FlickrUserID"];
            flickr = new Flickr(flickrKey);
            try
            {
                var photosetCollection = flickr.PhotosetsGetList(flickrUser);
                var photosets = new List<Photoset>();
                foreach (var photoset in photosetCollection)
                {
                    var ps = new Photoset
                    {
                        Title = photoset.Title,
                        Id = photoset.PhotosetId,
                        Description = photoset.Description,
                        Photos = new List<Photo>()
                    };
                    photosets.Add(ps);
                }

                foreach (var photoset in photosets)
                {
                    int slideId = 0;
                    var flickrPhotos = flickr.PhotosetsGetPhotos(photoset.Id);
                    foreach (var flickrPhoto in flickrPhotos)
                    {
                        var p = new Photo
                        {
                            //Id = flickrPhoto.PhotoId,
                            Id =  slideId,
                            Title = flickrPhoto.Title,
                            //Description = flickrPhoto.Description,
                            Thumb = flickrPhoto.ThumbnailUrl,
                            Small = flickrPhoto.Small320Url,
                            //Medium = flickrPhoto.Medium800Url,
                            Large = flickrPhoto.LargeUrl
                        };
                        photoset.Photos.Add(p);
                        slideId++;
                    }
                }
                return photosets;
            }
            catch (Exception)
            {
                return null;
            }
        }
    }
}
