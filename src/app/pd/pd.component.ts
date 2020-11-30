import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pd',
  templateUrl: './pd.component.html',
  styleUrls: ['./pd.component.css']
})
export class PdComponent implements OnInit {

  // constructor() { }

  datas = [
    {'Name': 'SanDisk Ultra Dual Micro USB OTG 32 GB USB 3.0 Pendrive ( Gold )', 'Price': '499', 'Discount': '-41%', 'ImageSrc': 'https://assetscdn1.paytm.com/images/catalog/product/S/ST/STOSANDISK-ULTRSUN-55339AD0BC2E0/1596688077707_12.jpg?imwidth=282&impolicy=hq', 'NavLink': 'https://paytmmall.com/sandisk-ultra-dual-64gb-usb-3-0-otg-pen-drive-gold-CMPLXSTOSANDISK-ULTRSUN-55339867B1F32-pdp?product_id=170595003&sid=a7e35a8c-331d-485c-9939-d63972d046cf&src=consumer_search&svc=-1&cid=6241&tracker=%7C%7Charddrive%20and%20pendrives%7Cgrid%7CSearch_experimentName%3Dnew_ranking%7C%7C1%7Cnew_ranking&get_review_id=175322241', 'Website': 'PaytmMall'},
    {'Name': 'Seagate Backup Plus Slim 1 TB USB 3.0 External HDD - Grey', 'Price': '3,999', 'Discount': '-33%', 'ImageSrc': 'https://assetscdn1.paytm.com/images/catalog/product/S/ST/STOSEAGATE-1TB-PARV58689B551CBC/1602886786297_5.jpg?imwidth=282&impolicy=hq', 'NavLink': 'https://paytmmall.com/new-seagate-1tb-backup-plus-slim-portable-external-hard-drive-with-free-2-month-adobe-cc-photography-plan-grey-CMPLXSTONEW-SEAGATE-DUMM202569562AF83-pdp?product_id=284367636&sid=a7e35a8c-331d-485c-9939-d63972d046cf&src=consumer_search&svc=-1&cid=6242&tracker=%7C%7Charddrive%20and%20pendrives%7Cgrid%7CSearch_experimentName%3Dnew_ranking%7C%7C2%7Cnew_ranking&get_review_id=245143277', 'Website': 'PaytmMall'},
    {'Name': 'WD My Passport New Edition 2 TB USB 3.0 External HDD - Blue', 'Price': '5,499', 'Discount': '-34%', 'ImageSrc': 'https://assetscdn1.paytm.com/images/catalog/product/S/ST/STOWD-2-TB-USB-SUN-553391C400CD9/1602328050807_6.jpg?imwidth=282&impolicy=hq', 'NavLink': 'https://paytmmall.com/wd-2-tb-hard-disk-drive-external-hard-disk-usb-3-0-black-wdbyvg0020bbk-wesn-CMPLXSTOWD-2-TB-USB-SUN-5533911998704-pdp?product_id=302551313&sid=a7e35a8c-331d-485c-9939-d63972d046cf&src=consumer_search&svc=-1&cid=6242&tracker=%7C%7Charddrive%20and%20pendrives%7Cgrid%7CSearch_experimentName%3Dnew_ranking%7C%7C3%7Cnew_ranking&get_review_id=302551331', 'Website': 'PaytmMall'},
    {'Name': 'HP V236W 32 GB USB 2.0 Pendrive ( Silver )', 'Price': '435', 'Discount': '-42%', 'ImageSrc': 'https://assetscdn1.paytm.com/images/catalog/product/S/ST/STOHP-V236W-32-BLUE1162245ADE5FD04/2.jpg?imwidth=282&impolicy=hq', 'NavLink': 'https://paytmmall.com/hp-v236w-usb-2-0-32-gb-utility-pen-drive-silver-CMPLXSTOHP-V236W-USBDUMM14155A7641B-pdp?product_id=331354377&sid=a7e35a8c-331d-485c-9939-d63972d046cf&src=consumer_search&svc=-1&cid=6241&tracker=%7C%7Charddrive%20and%20pendrives%7Cgrid%7CSearch_experimentName%3Dnew_ranking%7C%7C4%7Cnew_ranking&get_review_id=76871887', 'Website': 'PaytmMall'},
    {'Name': 'Simmtronics 2.0 Metal 32 GB 32 GB USB 2.0 Pendrive ( White )', 'Price': '379', 'Discount': '-62%', 'ImageSrc': 'https://assetscdn1.paytm.com/images/catalog/product/S/ST/STOSIMMTRONICS-STOR72621F019E72B/a_0..jpg?imwidth=282&impolicy=hq', 'NavLink': 'https://paytmmall.com/simmtronics-2-0-metal-body-32-gb-flash-drive-STOSIMMTRONICS-STOR72621F019E72B-pdp?sid=a7e35a8c-331d-485c-9939-d63972d046cf&src=consumer_search&svc=-1&cid=6241&tracker=%7C%7Charddrive%20and%20pendrives%7Cgrid%7CSearch_experimentName%3Dnew_ranking%7C%7C5%7Cnew_ranking&get_review_id=206719728', 'Website': 'PaytmMall'},
    {'Name': '8GB 16GB 32GB USB2.0 Flash Drive Flash Memory Stick Pen Drive For Iron Man Mark', 'Price': '2,543', 'Discount': '-40%', 'ImageSrc': 'https://assetscdn1.paytm.com/images/catalog/product/S/ST/STO8GB-16GB-32GSTEL1153764E97BA772/0..JPEG?imwidth=282&impolicy=hq', 'NavLink': 'https://paytmmall.com/8gb-16gb-32gb-usb2-0-flash-drive-flash-memory-stick-pen-drive-for-iron-man-mark-CMPLXSTO8GB-16GB-32GSTEL1153764E97BA772-pdp?product_id=325316466&sid=a7e35a8c-331d-485c-9939-d63972d046cf&src=consumer_search&svc=-1&cid=6241&tracker=%7C%7Charddrive%20and%20pendrives%7Cgrid%7CSearch_experimentName%3Dnew_ranking%7C%7C6%7Cnew_ranking&get_review_id=325316472', 'Website': 'PaytmMall'},
    {'Name': 'Kingston 32 GB USB 3.1 Pendrive ( Black & Silver )', 'Price': '437', 'Discount': '-38%', 'ImageSrc': 'https://assetscdn1.paytm.com/images/catalog/product/S/ST/STOKINGSTON-DATSTOR72621E43BC989/1567828499273_0.jpg?imwidth=282&impolicy=hq', 'NavLink': 'https://paytmmall.com/kingston-datatraveler-swivl-32gb-usb-usb-3-1-pen-drive-CMPLXSTOKINGSTON-DATDUMM20256E43BC989-pdp?product_id=281648313&sid=a7e35a8c-331d-485c-9939-d63972d046cf&src=consumer_search&svc=-1&cid=6241&tracker=%7C%7Charddrive%20and%20pendrives%7Cgrid%7CSearch_experimentName%3Dnew_ranking%7C%7C7%7Cnew_ranking&get_review_id=250473963', 'Website': 'PaytmMall'},
    {'Name': 'Strontium 64 GB USB 2.0 Pendrive ( Silver )', 'Price': '669', 'Discount': '-62%', 'ImageSrc': 'https://assetscdn1.paytm.com/images/catalog/product/S/ST/STOSTRONTIUM-AMSTOR72621DD67B308/6.jpg?imwidth=282&impolicy=hq', 'NavLink': 'https://paytmmall.com/strontium-ammo-64gb-pen-drive-CMPLXSTRONTIUM_AMMO_64GB_GREY-pdp?product_id=137640188&sid=a7e35a8c-331d-485c-9939-d63972d046cf&src=consumer_search&svc=-1&cid=6241&tracker=%7C%7Charddrive%20and%20pendrives%7Cgrid%7CSearch_experimentName%3Dnew_ranking%7C%7C8%7Cnew_ranking&get_review_id=4310025', 'Website': 'PaytmMall'},
    {'Name': 'Seagate Backup Plus Slim 2 TB USB 3.0 External HDD - Grey', 'Price': '5,499', 'Discount': '-31%', 'ImageSrc': 'https://assetscdn1.paytm.com/images/catalog/product/S/ST/STOSEAGATE-2TB-PARV58689B6E128F2/5.jpg?imwidth=282&impolicy=hq', 'NavLink': 'https://paytmmall.com/new-seagate-2tb-backup-plus-slim-portable-external-hard-drive-with-free-2-month-adobe-cc-photography-plan-red-CMPLXSTONEW-SEAGATE-DUMM20256525FA9C0-pdp?product_id=284367632&sid=a7e35a8c-331d-485c-9939-d63972d046cf&src=consumer_search&svc=-1&cid=6242&tracker=%7C%7Charddrive%20and%20pendrives%7Cgrid%7CSearch_experimentName%3Dnew_ranking%7C%7C9%7Cnew_ranking&get_review_id=245143278', 'Website': 'PaytmMall'},
    {'Name': 'SanDisk Ultra Dual Micro USB OTG 16 GB USB 3.0 Pendrive ( Multi )', 'Price': '429', 'Discount': '-23%', 'ImageSrc': 'https://assetscdn1.paytm.com/images/catalog/product/S/ST/STOSANDISK-USB-SUN-5533937A380F4/1586937867852_13.jpg?imwidth=282&impolicy=hq', 'NavLink': 'https://paytmmall.com/sandisk-ultra-otg-pen-drive-m3-0-sddd3-256g-g46-256-gb-pen-drives-black-silver-CMPLXSTOSANDISK-ULTRDUMM20256CED782AE-pdp?product_id=126807307&sid=a7e35a8c-331d-485c-9939-d63972d046cf&src=consumer_search&svc=-1&cid=6241&tracker=%7C%7Charddrive%20and%20pendrives%7Cgrid%7CSearch_experimentName%3Dnew_ranking%7C%7C10%7Cnew_ranking&get_review_id=260479244', 'Website': 'PaytmMall'},
    {'Name': 'WD My Passport 4TB Portable External Hard Drive (Red)', 'Price': '₹8619', 'Discount': '49% Off', 'ImageSrc': 'https://cdn.shopclues.com/images1/thumbnails/108347/200/200/150291002-108347695-1594412769.jpg', 'NavLink': 'https://www.shopclues.com/wd-my-passport-4tb-portable-external-hard-drive-red-150291002.html', 'Website': 'Shopclues'},
    {'Name': 'WD My Passport 4TB Portable External Hard Drive (Orange', 'Price': '₹9559', 'Discount': '44% Off', 'ImageSrc': 'https://cdn.shopclues.com/images1/thumbnails/108347/200/200/150291005-108347700-1594412779.jpg', 'NavLink': 'https://www.shopclues.com/wd-my-passport-4tb-portable-external-hard-drive-orange-150291005.html', 'Website': 'Shopclues'},
    {'Name': 'WD Elements 1TB Portable External Hard Drive (Black)', 'Price': '₹4119', 'Discount': '23% Off', 'ImageSrc': 'https://cdn.shopclues.com/images1/thumbnails/108347/200/200/150290999-108347692-1594412761.jpg', 'NavLink': 'https://www.shopclues.com/wd-elements-1tb-portable-external-hard-drive-black-150290999.html', 'Website': 'Shopclues'},
    {'Name': 'Toshiba HDTB410XK3AA Canvio Basics 1TB Portable Externa', 'Price': '₹3760', 'Discount': '37% Off', 'ImageSrc': 'https://cdn.shopclues.com/images1/thumbnails/111919/200/200/151372502-111919093-1604553033.jpg', 'NavLink': 'https://www.shopclues.com/toshiba-hdtb410xk3aa-canvio-basics-1tb-portable-external-hard-drive-usb-3.0-black-151372502.html', 'Website': 'Shopclues'},
    {'Name': 'WD My Passport 4TB Portable External Hard Drive (Black)', 'Price': '₹17760', 'Discount': '28% Off', 'ImageSrc': 'https://cdn.shopclues.com/images1/thumbnails/109072/200/200/150542647-109072404-1597076998.jpg', 'NavLink': 'https://www.shopclues.com/wd-my-passport-4tb-portable-external-hard-drive-black-150542647.html', 'Website': 'Shopclues'},
    {'Name': 'WD Elements 1TB Portable External Hard Drive (Black)', 'Price': '₹5760', 'Discount': '33% Off', 'ImageSrc': 'https://cdn.shopclues.com/images1/thumbnails/108531/200/200/150352510-108531581-1595330246.jpg', 'NavLink': 'https://www.shopclues.com/wd-elements-1tb-portable-external-hard-drive-black-150352510.html', 'Website': 'Shopclues'},
    {'Name': 'WD My Passport 2TB External Hard Drive (Blue)', 'Price': '₹6459', 'Discount': '21% Off', 'ImageSrc': 'https://cdn.shopclues.com/images1/thumbnails/108347/200/200/150291013-108347711-1594412805.jpg', 'NavLink': 'https://www.shopclues.com/wd-my-passport-2tb-external-hard-drive-blue-150291013.html', 'Website': 'Shopclues'},
    {'Name': 'WD My Passport 1TB Portable External Hard Drive (White)', 'Price': '₹4759', 'Discount': '40% Off', 'ImageSrc': 'https://cdn.shopclues.com/images1/thumbnails/108347/200/200/150291008-108347703-1594412787.jpg', 'NavLink': 'https://www.shopclues.com/wd-my-passport-1tb-portable-external-hard-drive-white-150291008.html', 'Website': 'Shopclues'},
    {'Name': 'WD My Passport 4TB Portable External Hard Drive (Blue)', 'Price': '₹9559', 'Discount': '44% Off', 'ImageSrc': 'https://cdn.shopclues.com/images1/thumbnails/108347/200/200/150291001-108347693-1594412766.jpg', 'NavLink': 'https://www.shopclues.com/wd-my-passport-4tb-portable-external-hard-drive-blue-150291001.html', 'Website': 'Shopclues'},
    {'Name': 'WD My Passport 2TB External Hard Drive (Red)', 'Price': '₹6459', 'Discount': '21% Off', 'ImageSrc': 'https://cdn.shopclues.com/images1/thumbnails/108347/200/200/150291014-108347713-1594412808.jpg', 'NavLink': 'https://www.shopclues.com/wd-my-passport-2tb-external-hard-drive-red-150291014.html', 'Website': 'Shopclues'}
    ]

  ngOnInit(): void {
  }

}
