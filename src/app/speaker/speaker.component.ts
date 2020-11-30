import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-speaker',
  templateUrl: './speaker.component.html',
  styleUrls: ['./speaker.component.css']
})
export class SpeakerComponent implements OnInit {

  // constructor() { }
  datas = null;
  

    ngOnInit(): void {
      setTimeout(() => {
        this.datas =  [
          {'Name': 'SKP PRO AUDIO SK-40 BK Compact Loudspeakers 100W.', 'Price': '33,460', 'Discount': '-40%', 'ImageSrc': 'https://assetscdn1.paytm.com/images/catalog/product/C/CO/COMSKP-PRO-AUDISTEL115376427574F37/0..JPEG?imwidth=282&impolicy=hq', 'NavLink': 'https://paytmmall.com/skp-pro-audio-sk-40-bk-compact-loudspeakers-100w-COMSKP-PRO-AUDISTEL115376427574F37-pdp?sid=dd3b358b-74da-4214-a555-5779949d2618&src=consumer_search&svc=-1&cid=11420&tracker=%7C%7Cloudspeakers%7Cgrid%7CSearch_experimentName%3Dnew_ranking%7C%7C1%7Cnew_ranking&get_review_id=324237486', 'Website': 'PaytmMall'},
          {'Name': 'TRUETEK WS-858 Multi-Function Karaoke Bluetooth Microphone Wireless Loudspeaker With Mic Speaker', 'Price': '599', 'Discount': '-70%', 'ImageSrc': 'https://assetscdn1.paytm.com/images/catalog/product/K/KI/KIDTRUETEK-WS-8ANGE949021ED483E24/a_0..jpg?imwidth=282&impolicy=hq', 'NavLink': 'https://paytmmall.com/truetek-ws-858-multi-function-karaoke-bluetooth-microphone-wireless-loudspeaker-with-mic-speaker-KIDTRUETEK-WS-8ANGE949021ED483E24-pdp?sid=dd3b358b-74da-4214-a555-5779949d2618&src=consumer_search&svc=-1&cid=23157&tracker=%7C%7Cloudspeakers%7Cgrid%7CSearch_experimentName%3Dnew_ranking%7C%7C2%7Cnew_ranking&get_review_id=229381157', 'Website': 'PaytmMall'},
          {'Name': 'Dodocool Loudspeaker Speaker Portable Stereo Handsfree Selfie Stick', 'Price': '4,032', 'Discount': '-40%', 'ImageSrc': 'https://assetscdn1.paytm.com/images/catalog/product/C/CO/COMDODOCOOL-LOUSTEL115376436BE0673/0..JPEG?imwidth=282&impolicy=hq', 'NavLink': 'https://paytmmall.com/dodocool-loudspeaker-speaker-portable-stereo-handsfree-selfie-stick-COMDODOCOOL-LOUSTEL115376436BE0673-pdp?sid=dd3b358b-74da-4214-a555-5779949d2618&src=consumer_search&svc=-1&cid=6455&tracker=%7C%7Cloudspeakers%7Cgrid%7CSearch_experimentName%3Dnew_ranking%7C%7C3%7Cnew_ranking&get_review_id=325051282', 'Website': 'PaytmMall'},
          {'Name': '2 DS18 PRO-X8M 8" Midrange Speakers 1100 Watt 8 Ohm Pro Midbass Loudspeakers', 'Price': '12,104', 'Discount': '-40%', 'ImageSrc': 'https://assetscdn1.paytm.com/images/catalog/product/A/AU/AUT2-DS18-PRO-XSTEL1153764E823B965/0..JPEG?imwidth=282&impolicy=hq', 'NavLink': 'https://paytmmall.com/2-ds18-pro-x8m-8-midrange-speakers-1100-watt-8-ohm-pro-midbass-loudspeakers-AUT2-DS18-PRO-XSTEL1153764E823B965-pdp?sid=dd3b358b-74da-4214-a555-5779949d2618&src=consumer_search&svc=-1&cid=40218&tracker=%7C%7Cloudspeakers%7Cgrid%7CSearch_experimentName%3Dnew_ranking%7C%7C4%7Cnew_ranking&get_review_id=324688405', 'Website': 'PaytmMall'},
          {'Name': 'Telex Wall Mount Bracket For EKX-12/12P Loudspeakers #F.01U.303.395', 'Price': '23,677', 'Discount': '-40%', 'ImageSrc': 'https://assetscdn1.paytm.com/images/catalog/product/H/HO/HOMTELEX-WALL-MSTEL115376491E4D84A/1581566840003_0..JPEG?imwidth=282&impolicy=hq', 'NavLink': 'https://paytmmall.com/telex-wall-mount-bracket-for-ekx-12-12p-loudspeakers-f-01u-303-395-HOMTELEX-WALL-MSTEL115376491E4D84A-pdp?sid=dd3b358b-74da-4214-a555-5779949d2618&src=consumer_search&svc=-1&cid=6363&tracker=%7C%7Cloudspeakers%7Cgrid%7CSearch_experimentName%3Dnew_ranking%7C%7C5%7Cnew_ranking&get_review_id=315184664', 'Website': 'PaytmMall'},
          {'Name': '30 Watt ReEntrant Horn Loudspeaker', 'Price': '15,020', 'Discount': '-40%', 'ImageSrc': 'https://assetscdn1.paytm.com/images/catalog/product/C/CA/CAM30-WATT-REENSTEL1153764AF5DDDA3/1581078563100_0..JPEG?imwidth=282&impolicy=hq', 'NavLink': 'https://paytmmall.com/30-watt-reentrant-horn-loudspeaker-CAM30-WATT-REENSTEL1153764AF5DDDA3-pdp?sid=dd3b358b-74da-4214-a555-5779949d2618&src=consumer_search&svc=-1&cid=33469&tracker=%7C%7Cloudspeakers%7Cgrid%7CSearch_experimentName%3Dnew_ranking%7C%7C6%7Cnew_ranking&get_review_id=313555387', 'Website': 'PaytmMall'},
          {'Name': 'Panasonic Corded Landline Phone - KX-TSC60SXW', 'Price': '1,225', 'Discount': '-4%', 'ImageSrc': 'https://assetscdn1.paytm.com/images/catalog/product/H/HO/HOMPANASONIC-COTARG75352C4C55DF1/2.jpg?imwidth=282&impolicy=hq', 'NavLink': 'https://paytmmall.com/panasonic-corded-landline-phone-kx-tsc60sxw-CMPLXHOMPANASONIC-COTARG75352C4C55DF1-pdp?product_id=30842095&sid=dd3b358b-74da-4214-a555-5779949d2618&src=consumer_search&svc=-1&cid=35103&tracker=%7C%7Cloudspeakers%7Cgrid%7CSearch_experimentName%3Dnew_ranking%7C%7C7%7Cnew_ranking&get_review_id=57958259', 'Website': 'PaytmMall'},
          {'Name': 'Mase WM3000 Super Bass Splashproof Wireless Bluetooth Speaker Best Sound Quality Playing With Mobile/Tablet/Laptop/AUX/Memory Card/Pan Drive', 'Price': '399', 'Discount': '-69%', 'ImageSrc': 'https://assetscdn1.paytm.com/images/catalog/product/M/MO/MOBMASE-WM3000-MAUR83893420C5FB5E/1594046138236_0..jpg?imwidth=282&impolicy=hq', 'NavLink': 'https://paytmmall.com/mase-wm3000-super-bass-splashproof-wireless-bluetooth-speaker-best-sound-quality-playing-with-mobile-tablet-laptop-aux-memory-card-pan-drive-MOBMASE-WM3000-MAUR83893420C5FB5E-pdp?sid=dd3b358b-74da-4214-a555-5779949d2618&src=consumer_search&svc=-1&cid=81171&tracker=%7C%7Cloudspeakers%7Cgrid%7CSearch_experimentName%3Dnew_ranking%7C%7C8%7Cnew_ranking&get_review_id=329711274', 'Website': 'PaytmMall'},
          {'Name': 'Listing Is For A Pair Of Brand New JBL Loft 30 Bookshelf Loudspeakers.', 'Price': '46,199', 'Discount': '-40%', 'ImageSrc': 'https://assetscdn1.paytm.com/images/catalog/product/C/CO/COMLISTING-IS-FSTEL1153764EE159B64/0..JPEG?imwidth=282&impolicy=hq', 'NavLink': 'https://paytmmall.com/listing-is-for-a-pair-of-brand-new-jbl-loft-30-bookshelf-loudspeakers-COMLISTING-IS-FSTEL1153764EE159B64-pdp?sid=dd3b358b-74da-4214-a555-5779949d2618&src=consumer_search&svc=-1&cid=11420&tracker=%7C%7Cloudspeakers%7Cgrid%7CSearch_experimentName%3Dnew_ranking%7C%7C9%7Cnew_ranking&get_review_id=324247201', 'Website': 'PaytmMall'},
          {'Name': 'Portable Party Bluetooth Loudspeaker Party Music Speaker Microphone Remote 8"', 'Price': '10,497', 'Discount': '-40%', 'ImageSrc': 'https://assetscdn1.paytm.com/images/catalog/product/C/CO/COMPORTABLE-PARSTEL1153764B19B24CA/3..JPEG?imwidth=282&impolicy=hq', 'NavLink': 'https://paytmmall.com/portable-party-bluetooth-loudspeaker-party-music-speaker-microphone-remote-8-COMPORTABLE-PARSTEL1153764B19B24CA-pdp?sid=dd3b358b-74da-4214-a555-5779949d2618&src=consumer_search&svc=-1&cid=6455&tracker=%7C%7Cloudspeakers%7Cgrid%7CSearch_experimentName%3Dnew_ranking%7C%7C10%7Cnew_ranking&get_review_id=324998033', 'Website': 'PaytmMall'}
          ]
      }, 5000);
    }

}
