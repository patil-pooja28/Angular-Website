import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-powerbank',
  templateUrl: './powerbank.component.html',
  styleUrls: ['./powerbank.component.css']
})
export class PowerbankComponent implements OnInit {

  // constructor() { }
  datas = null;
  


    ngOnInit(): void {
      setTimeout(() => {
        this.datas =  [
          {'Name': 'Mi 2i 20000 MAh Portable Power Bank - Black', 'Price': '1,569', 'Discount': '-22%', 'ImageSrc': 'https://assetscdn1.paytm.com/images/catalog/product/M/MO/MOBMI-20000-MAHGARG456328D9A9B13/1596822061833_4.jpg?imwidth=282&impolicy=hq', 'NavLink': 'https://paytmmall.com/mi-20000-mah-li-polyme-power-bank-black-CMPLXMOBMI-20000-MAHCELE212465136B9D4-pdp?product_id=331019168&sid=36801530-3d3d-4af5-b56e-20ba1b38330e&src=consumer_search&svc=-1&cid=6451&tracker=organic%7C6451%7Cpower%20bank%7Cgrid%7CSearch_experimentName%3Dnew_ranking%7C%7C1%7Cnew_ranking&get_review_id=287806426&site_id=2&child_site_id=6', 'Website': 'PaytmMall'},
          {'Name': 'Syska 10000 MAh Power Bank - Blue', 'Price': '779', 'Discount': '-57%', 'ImageSrc': 'https://assetscdn1.paytm.com/images/catalog/product/M/MO/MOBSYSKA-10000-GADG1114500BCC35A20/0.jpg?imwidth=282&impolicy=hq', 'NavLink': 'https://paytmmall.com/syska-power-slice-100-10000-mah-li-polymer-power-bank-blue-CMPLXMOBSYSKA-POWER-POOJ292141A2904EE-pdp?product_id=331954455&sid=36801530-3d3d-4af5-b56e-20ba1b38330e&src=consumer_search&svc=-1&cid=6451&tracker=organic%7C6451%7Cpower%20bank%7Cgrid%7CSearch_experimentName%3Dnew_ranking%7C%7C2%7Cnew_ranking&get_review_id=127744499&site_id=2&child_site_id=6', 'Website': 'PaytmMall'},
          {'Name': 'HAMINE 20K Aj Leather 20000 MAh Portable Power Bank - Black', 'Price': '408', 'Discount': '-80%', 'ImageSrc': 'https://assetscdn1.paytm.com/images/catalog/product/M/MO/MOBHAMINE-20000GADG75984219231E57/0..jpg?imwidth=282&impolicy=hq', 'NavLink': 'https://paytmmall.com/hamine-20k-aj-leather-20000-mah-li-ion-power-bank-black-MOBHAMINE-20000GADG75984219231E57-pdp?sid=36801530-3d3d-4af5-b56e-20ba1b38330e&src=consumer_search&svc=-1&cid=6451&tracker=organic%7C6451%7Cpower%20bank%7Cgrid%7CSearch_experimentName%3Dnew_ranking%7C%7C3%7Cnew_ranking&get_review_id=253456790&site_id=2&child_site_id=6', 'Website': 'PaytmMall'},
          {'Name': 'POMICS 20000 MAh Power Bank - Black', 'Price': '499', 'Discount': '-75%', 'ImageSrc': 'https://assetscdn1.paytm.com/images/catalog/product/M/MO/MOBPOMICS-20000VANS907262C5B940F4/a_0..jpg?imwidth=282&impolicy=hq', 'NavLink': 'https://paytmmall.com/pomics-20000-mah-power-bank-new-dotted-original-portable-battery-charger-black-lithium-ion-MOBPOMICS-20000VANS907262C5B940F4-pdp?sid=36801530-3d3d-4af5-b56e-20ba1b38330e&src=consumer_search&svc=-1&cid=6451&tracker=organic%7C6451%7Cpower%20bank%7Cgrid%7CSearch_experimentName%3Dnew_ranking%7C%7C4%7Cnew_ranking&get_review_id=224693036&site_id=2&child_site_id=6', 'Website': 'PaytmMall'},
          {'Name': 'Ambrane P-1133 12500 MAh Power Bank - Blue', 'Price': '699', 'Discount': '-68%', 'ImageSrc': 'https://assetscdn1.paytm.com/images/catalog/product/M/MO/MOBAMBRANE-POWEBJ-I586126433F2999/1584708520190_14.jpg?imwidth=282&impolicy=hq', 'NavLink': 'https://paytmmall.com/ambrane-power-bank-p-1133-12500mah-blue-CMPLXMOBAMBRANE-POWEDUMM141433F2999-pdp?product_id=129867684&sid=36801530-3d3d-4af5-b56e-20ba1b38330e&src=consumer_search&svc=-1&cid=6451&tracker=organic%7C6451%7Cpower%20bank%7Cgrid%7CSearch_experimentName%3Dnew_ranking%7C%7C5%7Cnew_ranking&get_review_id=129867689&site_id=2&child_site_id=6', 'Website': 'PaytmMall'},
          {'Name': 'Philips DLP1720CV 20000 MAh Portable Power Bank - Black', 'Price': '1,399', 'Discount': '-65%', 'ImageSrc': 'https://assetscdn1.paytm.com/images/catalog/product/M/MO/MOBPHILIPS-DLP1ACCE10195337505D762/1576275472967_0..png?imwidth=282&impolicy=hq', 'NavLink': 'https://paytmmall.com/philips-dlp1720cv-20000-mah-li-polymer-power-bank-black-MOBPHILIPS-DLP1ACCE10195337505D762-pdp?sid=36801530-3d3d-4af5-b56e-20ba1b38330e&src=consumer_search&svc=-1&cid=6451&tracker=organic%7C6451%7Cpower%20bank%7Cgrid%7CSearch_experimentName%3Dnew_ranking%7C%7C6%7Cnew_ranking&get_review_id=308055121&site_id=2&child_site_id=6', 'Website': 'PaytmMall'},
          {'Name': 'RealMe RMA138 10000 MAh Portable Fast Charging Power Bank - Yellow', 'Price': '899', 'Discount': '-31%', 'ImageSrc': 'https://assetscdn1.paytm.com/images/catalog/product/M/MO/MOBREALME-RMA13APNI99302072C5170F/1593842449350_0.jpg?imwidth=282&impolicy=hq', 'NavLink': 'https://paytmmall.com/realme-rma138-10000-mah-portable-fast-charging-power-bank-yellow-CMPLXMOBREALME-10000TECH817439EE1BF9B-pdp?product_id=329488758&sid=36801530-3d3d-4af5-b56e-20ba1b38330e&src=consumer_search&svc=-1&cid=6451&tracker=organic%7C6451%7Cpower%20bank%7Cgrid%7CSearch_experimentName%3Dnew_ranking%7C%7C7%7Cnew_ranking&get_review_id=327792014&site_id=2&child_site_id=6', 'Website': 'PaytmMall'},
          {'Name': 'Miara AJ Leather 30000 MAh Portable Power Bank - Brown', 'Price': '449', 'Discount': '-78%', 'ImageSrc': 'https://assetscdn1.paytm.com/images/catalog/product/M/MO/MOBMIARA-AJ-LEAMAYA1149841B0F2E41F/1602606640337_0..jpg?imwidth=282&impolicy=hq', 'NavLink': 'https://paytmmall.com/miara-aj-leather-30000-mah-portable-power-bank-brown-MOBMIARA-AJ-LEAMAYA1149841B0F2E41F-pdp?sid=36801530-3d3d-4af5-b56e-20ba1b38330e&src=consumer_search&svc=-1&cid=6451&tracker=organic%7C6451%7Cpower%20bank%7Cgrid%7CSearch_experimentName%3Dnew_ranking%7C%7C8%7Cnew_ranking&get_review_id=332610648&site_id=2&child_site_id=6', 'Website': 'PaytmMall'},
          {'Name': 'Pebble PICO 10000 MAh Power Bank - Black', 'Price': '899', 'Discount': '-67%', 'ImageSrc': 'https://assetscdn1.paytm.com/images/catalog/product/M/MO/MOBPEBBLE-PICO-PEBB201899029BEB4/7.jpg?imwidth=282&impolicy=hq', 'NavLink': 'https://paytmmall.com/pebble-pico-smallest-2-1a-fast-charging-10-000-mah-powerbank-with-digital-display-compatible-with-iphone-android-MOBPEBBLE-PICO-PEBB201899029BEB4-pdp?sid=36801530-3d3d-4af5-b56e-20ba1b38330e&src=consumer_search&svc=-1&cid=6451&tracker=organic%7C6451%7Cpower%20bank%7Cgrid%7CSearch_experimentName%3Dnew_ranking%7C%7C9%7Cnew_ranking&get_review_id=169587125&site_id=2&child_site_id=6', 'Website': 'PaytmMall'},
          {'Name': 'PB-Hefty M5 30000 MAh Portable Power Bank - White', 'Price': '449', 'Discount': '-78%', 'ImageSrc': 'https://assetscdn1.paytm.com/images/catalog/product/M/MO/MOBPB-HEFTY-M5-R-K-11474458E470F04/0..jpg?imwidth=282&impolicy=hq', 'NavLink': 'https://paytmmall.com/pb-hefty-m5-30000-mah-portable-power-bank-white-MOBPB-HEFTY-M5-R-K-11474458E470F04-pdp?sid=36801530-3d3d-4af5-b56e-20ba1b38330e&src=consumer_search&svc=-1&cid=6451&tracker=organic%7C6451%7Cpower%20bank%7Cgrid%7CSearch_experimentName%3Dnew_ranking%7C%7C10%7Cnew_ranking&get_review_id=331837559&site_id=2&child_site_id=6', 'Website': 'PaytmMall'},
          ]
      }, 5000);
    }

}
