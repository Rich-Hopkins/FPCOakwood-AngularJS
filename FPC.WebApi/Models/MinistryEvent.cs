using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace FPC.WebApi.Models
{
  public class MinistryEvent
  {
    public MinistryEvent()
    {
      
    }
    public MinistryEvent(string date)
    {
      Date = date;
    }
    public string Date { get; set; }
    public List<Assignment> Assignments { get; set; }
  }
}