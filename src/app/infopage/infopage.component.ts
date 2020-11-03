import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-infopage',
  templateUrl: './infopage.component.html',
  styleUrls: ['./infopage.component.css']
})
export class InfopageComponent implements OnInit {

  constructor(private httpClient: HttpClient, private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    const key = navigation.extras.state as { keyword: string };
    console.log(key);
    this.httpClient.post('http://127.0.0.1:5000/search', key).subscribe(data => {
      //this.serverData = data as JSON;
      console.log(data);
    });

  }



  datas = [{
    "Name": "Asus E402YA-GA067T Laptop (AMD Dual Core E2 7015 @1.5GH", "Price": "\u20b921290", "Discount":
      "14% Off", "ImageSrc": "https://cdn.shopclues.com/images1/thumbnails/111495/200/200/151237966-111495230-1603117184.jpg",
    "NavLink":
      "https://www.shopclues.com/asus-e402ya-ga067t-laptop-amd-dual-core-e2-7015-1.5ghz-4gb-ram-1tb-hdd-14-hd-windows-10-home-thin-and-light-151237966.html"
  },
  {
    "Name": "Asus P1440FA-3410Z Laptop (Intel Core i3 8th Gen 8145U", "Price": "\u20b929550", "Discount": "29% Off",
    "ImageSrc": "https://cdn.shopclues.com/images1/thumbnails/111495/200/200/151238155-111495677-1603120650.jpg", "NavLink":
      "https://www.shopclues.com/asus-p1440fa-3410z-laptop-intel-core-i3-8th-gen-8145u-2.1ghz-4gb-ram-1tb-hdd-dvdrw-14-screen-dos-1.8kgs-star-grey-151238155.html"
  },
  {
    "Name": "Lenovo 81W100HKIN Laptop (AMD Athlon Silver 3050U @.2.3", "Price": "\u20b926690", "Discount": "18% Off",
    "ImageSrc": "https://cdn.shopclues.com/images1/thumbnails/111745/200/200/151307870-111745134-1603478197.jpg", "NavLink":
      "https://www.shopclues.com/lenovo-81w100hkin-laptop-amd-athlon-silver-3050u-.2.3ghz-4gb-ram-1tb-hdd-15.6-hd-windows-10-homems-office-no-odd-151307870.html"
  },
  {
    "Name": "Asus M509DA-EJ042T Laptop (AMD Athlon-3050U @2.3GHz/4GB", "Price": "\u20b925700", "Discount": "11% Off",
    "ImageSrc": "https://cdn.shopclues.com/images1/thumbnails/111495/200/200/151238045-111495448-1603118693.jpg", "NavLink":
      "https://www.shopclues.com/asus-m509da-ej042t-laptop-amd-athlon-3050u-2.3ghz-4gb-ram-1tb-hdd-15.6fhd-win-10-home-grey-no-odd-without-optical-151238045.html"
  },
  {
    "Name": "ASUS X540NA-GQ285T Laptop (Intel Celeron N3350 @1.1GHz/", "Price": "\u20b922350", "Discount": "10% Off",
    "ImageSrc": "https://cdn.shopclues.com/images1/thumbnails/111495/200/200/151237909-111495032-1603115612.jpg", "NavLink":
      "https://www.shopclues.com/asus-x540na-gq285t-laptop-intel-celeron-n3350-1.1ghz-4gb-ram-1tb-hdd-15.6-hd-screen-windows-10-home-black-1.7kg-151237909.html"
  },
  {
    "Name": "Asus P1440FA-FQ2348 Laptop (Intel Core i3 10th Gen 1011", "Price": "\u20b932790", "Discount": "18% Off",
    "ImageSrc": "https://cdn.shopclues.com/images1/thumbnails/111495/200/200/151238200-111495759-1603122040.jpg", "NavLink":
      "https://www.shopclues.com/asus-p1440fa-fq2348-laptop-intel-core-i3-10th-gen-10110u-2.1ghz-4gb-ram-1tb-hdd-14-hd-dos-1.7kgs-black-no-odd-151238200.html"
  },
  {
    "Name": "Laptop Hp 430 g7 Intel Core i3 10th Gen 8 GB DDR4 Ram /", "Price": "\u20b967300", "Discount": "48% Off",
    "ImageSrc": "https://cdn.shopclues.com/images1/thumbnails/109399/200/200/150614342-109399982-1598619599.jpg", "NavLink":
      "https://www.shopclues.com/laptop-hp-430-g7-intel-core-i3-10th-gen-8-gb-ddr4-ram-512-gb-ssd-window-10-pro-150614342.html"
  },
  {
    "Name": "COCONICS Enabler C1314 - CNBIC-AA01- Linux/Ubuntu- Inte", "Price": "\u20b922249", "Discount": "36% Off",
    "ImageSrc": "https://cdn.shopclues.com/images1/thumbnails/109240/200/200/150595824-109240157-1598079368.jpg", "NavLink":
      "https://www.shopclues.com/coconics-enabler-c1314-ubuntu-intel-corei3-7100-u-2.4-ghz-14-tn-1366-x-768-4-gb-ram-500-gb-sata-hdd-150595824.html"
  },
  {
    "Name": "COCONICS Enabler C1314W- CNBIC-AA01- Windows 10 Profess", "Price": "\u20b932699", "Discount": "40% Off",
    "ImageSrc": "https://cdn.shopclues.com/images1/thumbnails/109383/200/200/150607264-109383009-1598411716.jpg", "NavLink":
      "https://www.shopclues.com/coconics-enabler-c1314w-windows-10-professional-intel-corei3-7100-u-2.4-ghz-14-tn-1366-x-768-8gb-ram-500-gb-sata-hdd-150607264.html"
  },
  {
    "Name": "COCONICS Enabler C1314W- CNBIC-AA01- Windows 10 Home- I", "Price": "\u20b926999", "Discount": "32% Off",
    "ImageSrc": "https://cdn.shopclues.com/images1/thumbnails/109240/200/200/150595825-109240162-1598079395.jpg", "NavLink":
      "https://www.shopclues.com/coconics-enabler-c1314w-windows-10-home-intel-corei3-7100-u-2.4-ghz-14-tn-1366-x-768-4-gb-ram-500-gb-sata-hdd-150595825.html"
  },
  {
    "Name": "Coconics Enabler C1314W- Windows 10 Professional- Intel", "Price": "\u20b933439", "Discount": "44% Off",
    "ImageSrc": "https://cdn.shopclues.com/images1/thumbnails/109383/200/200/150607261-109383000-1598411640.jpg", "NavLink":
      "https://www.shopclues.com/coconics-enabler-c1314w-windows-10-professional-intel-corei3-7100-u-2.4-ghz-14-tn-1366-x-768-8gb-ram-1-tb-sata-hdd-150607261.html"
  },
  {
    "Name": "Lenovo Slim 3-15IML05 (81WB00FAIN) Core i5 10th Gen 102", "Price": "\u20b958800", "Discount": "16% Off",
    "ImageSrc": "https://cdn.shopclues.com/images1/thumbnails/111885/200/200/151358307-111885870-1604228143.jpg", "NavLink":
      "https://www.shopclues.com/lenovo-slim-3-15iml05-81wb00fain-core-i5-10th-gen-10210u-8gb-ram-1tb-hdd256gb-ssd-2gb-15.6-windows-10-homems-office-151358307.html"
  }]

  ngOnInit(): void {


  }

}
