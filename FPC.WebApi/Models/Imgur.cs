using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace FPC.WebApi.Models.Albums
{
    public class Albums
    {
        public List<Album> Data { get; set; }
        //public bool Success { get; set; }
        //public long Status { get; set; }
    }

    public class Album
    {
        public string Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public List<Images.Image> Images {get;set;}
        //public long Datetime { get; set; }
        //public string Cover { get; set; }
        //public long CoverWidth { get; set; }
        //public long CoverHeight { get; set; }
        //public string AccountUrl { get; set; }
        //public long AccountId { get; set; }
        //public string Privacy { get; set; }
        //public string Layout { get; set; }
        //public long Views { get; set; }
        //public string Link { get; set; }
        //public bool Favorite { get; set; }
        //public object Nsfw { get; set; }
        //public object Section { get; set; }
        //public long ImagesCount { get; set; }
        //public bool InGallery { get; set; }
        //public bool IsAd { get; set; }
        //public bool IncludeAlbumAds { get; set; }
        //public long Order { get; set; }
    }

}

namespace FPC.WebApi.Models.Images
{
    public class Images
    {
        public List<Image> Data { get; set; }
        public bool Success { get; set; }
        public long Status { get; set; }
    }

    public class Image
    {
        public string Id { get; set; }
        public object Title { get; set; }
        public string Description { get; set; }
        public long Datetime { get; set; }
        public string Type { get; set; }
        public bool Animated { get; set; }
        public long Width { get; set; }
        public long Height { get; set; }
        public long Size { get; set; }
        public long Views { get; set; }
        public long Bandwidth { get; set; }
        public object Vote { get; set; }
        public bool Favorite { get; set; }
        public object Nsfw { get; set; }
        public object Section { get; set; }
        public object AccountUrl { get; set; }
        public object AccountId { get; set; }
        public bool IsAd { get; set; }
        public bool InMostViral { get; set; }
        public bool HasSound { get; set; }
        public List<object> Tags { get; set; }
        public long AdType { get; set; }
        public string AdUrl { get; set; }
        public bool InGallery { get; set; }
        public string Link { get; set; }
    }

}