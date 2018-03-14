using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace FPC.WebApi.Models
{
  public class Assignment
  {
    public Assignment(string title)
    {
      Title = title;
    }
    public string Title { get; set; }
    public List<string> Names { get; set; }
  }
}