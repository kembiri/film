const filmData = [
  {
    title: "The Doctors (2016)",
    slug: "the-doctors-2016",
    type: "Serial",
    genre: ["Drama", "Komedi"],
    country: "Korea",
    poster:
      "https://blogger.googleusercontent.com/img/a/AVvXsEhMmLvfv8SmwhgaVB3AXTkJE0bBSADiJwITNzV29n2kYaVHOLrLVLStdxG4y0hC4q8UjqMQ4xDr5mCR8pTABfi-VNdl5ZfAX95Omznwhqb2ApUo0b3exQ8e9ejeY52OLXVeb8Gb68AkO1p3fj0zGM31VCRbrNtvK-2iv6uxDEosrP0tc4ju4UF2OrOM=s320",
    image:
      "https://thumbor.prod.vidiocdn.com/KdCLJ13cxTIEUnQ4ITHGYYxAXRc=/960x540/filters:quality(75)/vidio-media-production/uploads/image/source/4476/6c772c.jpg",
    episodes: [
      {
        label: "Trailer Song",
        url: "https://firebasestorage.googleapis.com/v0/b/bangden-com.appspot.com/o/upload%2FNo%20Way%20_%20Doctors%20%EB%8B%A5%ED%84%B0%EC%8A%A4%20Original%20Theme%20Song%20OST%20in%20Full%20HD%20Park%20Shin%20Hye%20korean%20drama%20(1).mp4?alt=media&token=",
      },
      {
        label: "Episode 1",
        url: "https://firebasestorage.googleapis.com/v0/b/bangden-com.appspot.com/o/upload%2FD21.FUN-Doctors%20(Dakteoseu)%20-%20Season%201%20Episode%201%20(2016)-720p.mp4?alt=media&token=",
      },
      {
        label: "Episode 2",
        url: "https://firebasestorage.googleapis.com/v0/b/bangden-com.appspot.com/o/upload%2FD21.FUN-Doctors-2016-E02-1675864501.mp4?alt=media&token=",
      },
      {
        label: "Episode 3",
        url: "https://firebasestorage.googleapis.com/v0/b/bangden-com.appspot.com/o/upload%2FD21.FUN-Doctors%20(Dakteoseu)%20-%20Season%201%20Episode%203%20(2016)-720p.mp4?alt=media&token=",
      },
      {
        label: "Episode 4",
        url: "https://firebasestorage.googleapis.com/v0/b/bangden-com.appspot.com/o/upload%2FD21%20FUN%20Doctors%202016%20E04%201675864678%20mp4.mp4?alt=media&token=",
      },
      {
        label: "Episode 5",
        url: "https://firebasestorage.googleapis.com/v0/b/bangden-com.appspot.com/o/upload%2FD21.FUN-Doctors-2016-E05-1675864724.mp4?alt=media&token=",
      },
      {
        label: "Episode 6",
        url: "https://firebasestorage.googleapis.com/v0/b/bangden-com.appspot.com/o/upload%2FD21.FUN-Doctors-2016-E06-1675864874.mp4?alt=media&token=",
      },
      {
        label: "Episode 7",
        url: "https://firebasestorage.googleapis.com/v0/b/bangden-com.appspot.com/o/upload%2FD21.FUN-Doctors-2016-E07-1675864954.mp4?alt=media&token=",
      },
      {
        label: "Episode 8",
        url: "https://firebasestorage.googleapis.com/v0/b/bangden-com.appspot.com/o/upload%2FD21%20FUN%20Doctors%202016%20E08%201675865068%20mp4.mp4?alt=media&token=",
      },
      {
        label: "Episode 9",
        url: "https://firebasestorage.googleapis.com/v0/b/bangden-com.appspot.com/o/upload%2FD21.FUN-Doctors-2016-E09-1675865128.mp4?alt=media&token=",
      },
      {
        label: "Episode 10",
        url: "https://firebasestorage.googleapis.com/v0/b/bangden-com.appspot.com/o/upload%2FD21%20FUN%20Doctors%202016%20E10%201675865188%20mp4.mp4?alt=media&token=",
      },
      {
        label: "Episode 11",
        url: "https://firebasestorage.googleapis.com/v0/b/bangden-com.appspot.com/o/upload%2FD21%20FUN%20Doctors%202016%20E11%201675865246%20mp4.mp4?alt=media&token=",
      },
      {
        label: "Episode 12",
        url: "https://firebasestorage.googleapis.com/v0/b/bangden-com.appspot.com/o/upload%2FD21%20FUN%20Doctors%202016%20E12%201675865314%20mp4.mp4?alt=media&token=",
      },
      {
        label: "Episode 13",
        url: "https://firebasestorage.googleapis.com/v0/b/bangden-com.appspot.com/o/upload%2FD21%20FUN%20Doctors%202016%20E13%201675865314%20mp4.mp4?alt=media&token=",
      },
      {
        label: "Episode 14",
        url: "https://firebasestorage.googleapis.com/v0/b/bangden-com.appspot.com/o/upload%2FD21.FUN-Doctors-2016-E14-1675865860.mp4?alt=media&token=",
      },
      {
        label: "Episode 15",
        url: "https://firebasestorage.googleapis.com/v0/b/bangden-com.appspot.com/o/upload%2FD21%20FUN%20Doctors%202016%20E15%201675865920%20mp4.mp4?alt=media&token=",
      },
      {
        label: "Episode 16",
        url: "https://firebasestorage.googleapis.com/v0/b/bangden-com.appspot.com/o/upload%2FD21%20FUN%20Doctors%202016%20E16%201675866045%20mp4.mp4?alt=media&token=",
      },
      {
        label: "Episode 17",
        url: "https://firebasestorage.googleapis.com/v0/b/bangden-com.appspot.com/o/upload%2FD21%20FUN%20Doctors%202016%20E17%201675866107%20mp4.mp4?alt=media&token=",
      },
      {
        label: "Episode 18",
        url: "https://firebasestorage.googleapis.com/v0/b/bangden-com.appspot.com/o/upload%2FLk21%20Nonton%20Doctors%20(Dakteoseu)%20-%20Season%201%20Episode%2018%20(2016)%20Streaming%20Download%20Layarkaca21.mp4?alt=media&token=",
      },
      {
        label: "Episode 19",
        url: "https://firebasestorage.googleapis.com/v0/b/bangden-com.appspot.com/o/upload%2FD21.FUN-Doctors-2016-E19-1675866289.mp4?alt=media&token=",
      },
      {
        label: "Episode 20",
        url: "https://firebasestorage.googleapis.com/v0/b/bangden-com.appspot.com/o/upload%2FD21%20FUN%20Doctors%202016%20E20%20End%201675866355%20mp4.mp4?alt=media&token=",
      },
    ],
  },
  {
  title: "When Life Gives You Tangerines (2025)",
    slug: "when-life-gives-you-tangerines-2025",
    type: "Serial",
    genre: ["Drama", "Komedi"],
    country: "Korea",
    poster:
      "https://m.media-amazon.com/images/M/MV5BNDU5NTY2YjgtNGZjNy00MTk2LWExM2QtOTdlMjhjZTE5MTMxXkEyXkFqcGc@._V1_FMjpg_UX1200_.jpg",
    image:
      "https://m.media-amazon.com/images/M/MV5BOWNmOTE3NmUtYTE3My00MjhiLTk1NzEtN2RlMWE5MzQyYjE5XkEyXkFqcGc@._V1_FMjpg_UX1024_.jpg",
    episodes: [
      {
        label: "Episode 1",
        url: "https://firebasestorage.googleapis.com/v0/b/bangden-com.appspot.com/o/upload%2FD21.FUN-When%20Life%20Gives%20You%20Tangerines%20-%20Season%201%20Episode%201%20(2025)-1080p.mp4?alt=media&token=",
      },
      {
        label: "Episode 2",
        url: "https://firebasestorage.googleapis.com/v0/b/bangden-com.appspot.com/o/upload%2FD21.FUN-When%20Life%20Gives%20You%20Tangerines%20-%20Season%201%20Episode%202%20(2025)-1080p.mp4?alt=media&token=",
      },
      {
        label: "Episode 3",
        url: "https://firebasestorage.googleapis.com/v0/b/bangden-com.appspot.com/o/upload%2FD21.FUN-When%20Life%20Gives%20You%20Tangerines%20-%20Season%201%20Episode%203%20(2025)-1080p.mp4?alt=media&token=",
      },
      {
        label: "Episode 4",
        url: "https://firebasestorage.googleapis.com/v0/b/bangden-com.appspot.com/o/upload%2FD21.FUN-When%20Life%20Gives%20You%20Tangerines%20-%20Season%201%20Episode%204%20(2025)-1080p.mp4?alt=media&token=",
      },
      {
        label: "Episode 5",
        url: "https://firebasestorage.googleapis.com/v0/b/bangden-com.appspot.com/o/upload%2FD21.FUN-When%20Life%20Gives%20You%20Tangerines%20-%20Season%201%20Episode%205%20(2025)-1080p.mp4?alt=media&token=",
      },
      {
        label: "Episode 6",
        url: "https://firebasestorage.googleapis.com/v0/b/bangden-com.appspot.com/o/upload%2FD21.FUN-When%20Life%20Gives%20You%20Tangerines%20-%20Season%201%20Episode%206%20(2025)-1080p.mp4?alt=media&token=",
      },
      {
        label: "Episode 7",
        url: "https://firebasestorage.googleapis.com/v0/b/bangden-com.appspot.com/o/upload%2FD21.FUN-When%20Life%20Gives%20You%20Tangerines%20-%20Season%201%20Episode%207%20(2025)-1080p.mp4?alt=media&token=",
      },
      {
        label: "Episode 8",
        url: "https://firebasestorage.googleapis.com/v0/b/bangden-com.appspot.com/o/upload%2FD21.FUN-When%20Life%20Gives%20You%20Tangerines%20-%20Season%201%20Episode%208%20(2025)-1080p.mp4?alt=media&token=",
      },
      {
        label: "Episode 9",
        url: "https://firebasestorage.googleapis.com/v0/b/bangden-com.appspot.com/o/upload%2FD21.FUN-When%20Life%20Gives%20You%20Tangerines%20-%20Season%201%20Episode%209%20(2025)-1080p.mp4?alt=media&token=",
      },
      {
        label: "Episode 10",
        url: "https://firebasestorage.googleapis.com/v0/b/bangden-com.appspot.com/o/upload%2FD21.FUN-When%20Life%20Gives%20You%20Tangerines%20-%20Season%201%20Episode%2010%20(2025)-1080p.mp4?alt=media&token=67c35bae-4f6f-4f81-b0bf-6494a4b7f0e2",
      },
      {
        label: "Episode 11",
        url: "https://firebasestorage.googleapis.com/v0/b/bangden-com.appspot.com/o/upload%2FD21.FUN-When%20Life%20Gives%20You%20Tangerines%20-%20Season%201%20Episode%2011%20(2025)-1080p.mp4?alt=media&token=3c542517-19e0-4a00-8166-d9c13139f861",
      },
      {
        label: "Episode 12",
        url: "https://firebasestorage.googleapis.com/v0/b/bangden-com.appspot.com/o/upload%2FD21.FUN-When%20Life%20Gives%20You%20Tangerines%20-%20Season%201%20Episode%2012%20(2025)-1080p.mp4?alt=media&token=69c690b4-7e7e-48c0-8280-46f25850d9ed",
      },
      {
        label: "Episode 13",
        url: "https://firebasestorage.googleapis.com/v0/b/bangden-com.appspot.com/o/upload%2FD21.FUN-When%20Life%20Gives%20You%20Tangerines%20-%20Season%201%20Episode%2013%20(2025)-1080p.mp4?alt=media&token=ee11a5a7-d48c-4706-94fe-7a72be70b336",
      },
      {
        label: "Episode 14",
        url: "https://firebasestorage.googleapis.com/v0/b/bangden-com.appspot.com/o/upload%2FD21.FUN-When%20Life%20Gives%20You%20Tangerines%20-%20Season%201%20Episode%2014%20(2025)-1080p.mp4?alt=media&token=4e8abfcb-5153-48f6-8714-67b090a4848d",
      },
      {
        label: "Episode 15",
        url: "https://firebasestorage.googleapis.com/v0/b/bangden-com.appspot.com/o/upload%2FD21.FUN-When%20Life%20Gives%20You%20Tangerines%20-%20Season%201%20Episode%2015%20(2025)-1080p.mp4?alt=media&token=de5576d1-0b56-4832-84e0-f6193d792ab6",
      },
      {
        label: "Episode 16",
        url: "https://firebasestorage.googleapis.com/v0/b/bangden-com.appspot.com/o/upload%2FD21.FUN-When%20Life%20Gives%20You%20Tangerines%20-%20Season%201%20Episode%2016%20(2025)-1080p.mp4?alt=media&token=567c0a13-20f9-490e-8b52-4da32131fede",
      },
    ],
  },
  {
    title: "Doctor John (2019)",
    slug: "doctor-jhon-2019",
    type: "Serial",
    genre: ["Drama", "Komedi"],
    country: "Korea",
    poster:
      "https://thumbor.prod.vidiocdn.com/6taUK6BuVGwGACaI9b4ZTyJLrxA=/223x332/filters:quality(75)/vidio-web-prod-film/uploads/film/image_portrait/1299/doctor-john-c7cd2a.jpg",
    image:
      "https://thumbor.prod.vidiocdn.com/UZUmX7f40DNDR4ootyM_R29UHKo=/960x540/filters:quality(75)/vidio-web-prod-film/uploads/film/image_landscape/1299/doctor-john-86a1b5.jpg",
    episodes: [
      {
        label: "Episode 1",
        url: "https://firebasestorage.googleapis.com/v0/b/bangden-com.appspot.com/o/upload%2FD21%20FUN%20Doctor%20john%20uisa%20yohan%20season%201%20episode%201%202019%20mp4.mp4?alt=media&token=",
      },
      {
        label: "Episode 2",
        url: "https://firebasestorage.googleapis.com/v0/b/bangden-com.appspot.com/o/upload%2FD21%20FUN%20Doctor%20john%20uisa%20yohan%20season%201%20episode%202%202019%20mp4.mp4?alt=media&token=",
      },
      {
        label: "Episode 3",
        url: "https://firebasestorage.googleapis.com/v0/b/bangden-com.appspot.com/o/upload%2FD21%20FUN%20Doctor%20john%20uisa%20yohan%20season%201%20episode%203%202019%20mp4.mp4?alt=media&token=",
      },
      {
        label: "Episode 4",
        url: "https://firebasestorage.googleapis.com/v0/b/bangden-com.appspot.com/o/upload%2FD21%20FUN%20Doctor%20john%20uisa%20yohan%20season%201%20episode%204%202019%20mp4.mp4?alt=media&token=",
      },
      {
        label: "Episode 5",
        url: "https://firebasestorage.googleapis.com/v0/b/bangden-com.appspot.com/o/upload%2FD21%20FUN%20Doctor%20john%20uisa%20yohan%20season%201%20episode%205%202019%20mp4.mp4?alt=media&token=",
      },
      {
        label: "Episode 6",
        url: "https://firebasestorage.googleapis.com/v0/b/bangden-com.appspot.com/o/upload%2FD21%20FUN%20Doctor%20john%20uisa%20yohan%20season%201%20episode%206%202019%20mp4.mp4?alt=media&token=",
      },
      {
        label: "Episode 7",
        url: "https://firebasestorage.googleapis.com/v0/b/bangden-com.appspot.com/o/upload%2FD21%20FUN%20Doctor%20john%20uisa%20yohan%20season%201%20episode%207%202019%20mp4.mp4?alt=media&token=",
      },
      {
        label: "Episode 8",
        url: "https://firebasestorage.googleapis.com/v0/b/bangden-com.appspot.com/o/upload%2FD21%20FUN%20Doctor%20john%20uisa%20yohan%20season%201%20episode%208%202019%20mp4.mp4?alt=media&token=",
      },
      {
        label: "Episode 9",
        url: "https://firebasestorage.googleapis.com/v0/b/bangden-com.appspot.com/o/upload%2FD21%20FUN%20Doctor%20john%20uisa%20yohan%20season%201%20episode%209%202019%20mp4.mp4?alt=media&token=",
      },
      {
        label: "Episode 10",
        url: "https://firebasestorage.googleapis.com/v0/b/bangden-com.appspot.com/o/upload%2FD21%20FUN%20Doctor%20john%20uisa%20yohan%20season%201%20episode%2010%202019%20mp4.mp4?alt=media&token=",
      },
      {
        label: "Episode 11",
        url: "https://firebasestorage.googleapis.com/v0/b/bangden-com.appspot.com/o/upload%2FD21%20FUN%20Doctor%20john%20uisa%20yohan%20season%201%20episode%2011%202019%20mp4.mp4?alt=media&token=",
      },
      {
        label: "Episode 12",
        url: "https://firebasestorage.googleapis.com/v0/b/bangden-com.appspot.com/o/upload%2FD21%20FUN%20Doctor%20john%20uisa%20yohan%20season%201%20episode%2012%202019%20mp4.mp4?alt=media&token=",
      },
      {
        label: "Episode 13",
        url: "https://firebasestorage.googleapis.com/v0/b/bangden-com.appspot.com/o/upload%2FD21%20FUN%20Doctor%20john%20uisa%20yohan%20season%201%20episode%2013%202019%20mp4.mp4?alt=media&token=",
      },
      {
        label: "Episode 14",
        url: "https://firebasestorage.googleapis.com/v0/b/bangden-com.appspot.com/o/upload%2FD21%20FUN%20Doctor%20john%20uisa%20yohan%20season%201%20episode%2014%202019%20mp4.mp4?alt=media&token=",
      },
      {
        label: "Episode 15",
        url: "https://firebasestorage.googleapis.com/v0/b/bangden-com.appspot.com/o/upload%2FD21%20FUN%20Doctor%20john%20uisa%20yohan%20season%201%20episode%2015%202019%20mp4.mp4?alt=media&token=",
      },
      {
        label: "Episode 16",
        url: "https://firebasestorage.googleapis.com/v0/b/bangden-com.appspot.com/o/upload%2FD21%20FUN%20Doctor%20john%20uisa%20yohan%20season%201%20episode%2016%202019%20mp4.mp4?alt=media&token=",
      },
    ],
  },
  {
    title: "Doctor Stranger (2014) - Season 1",
    slug: "doctor-stranger-2014",
    type: "Serial",
    genre: ["Drama", "Komedi"],
    country: "Korea",
    poster:
      "https://blogger.googleusercontent.com/img/a/AVvXsEjeWSjaQLo2LytW17c3FFcVpX5g0KReQjiyEaJj80SkHN66yLfg4HePwK6FiO-YdNN3m36pUnV9nLmb6msw7FjXwWmgdLDGDx29LBJ0i-mPJ_feufh9gG5yrSxb8r0dYJ_LVHPSLSU0BTy-HYbFSBMYcHIaFqRS-7CJUCNHDxkUVo48tOW6g9asJKWq=s320",
    image:
      "https://thumbor.prod.vidiocdn.com/3IrS8srnGqD9dyGfCSBSISDyuWI=/224x126/filters:format(webp):quality(70)/vidio-web-prod-video/uploads/video/image/1982973/episode-17-f5f52e.jpg",
    episodes: [
      {
        label: "Episode 1",
        url: "https://firebasestorage.googleapis.com/v0/b/login-9eb3d.appspot.com/o/DoctorStranger2014%2FD21.FUN-Doctor%20Stranger%20(Dakteo%20Yibangin)%20-%20Season%201%20Episode%201%20(2014)-720p.mp4?alt=media&token=",
      },
      {
        label: "Episode 2",
        url: "https://firebasestorage.googleapis.com/v0/b/login-9eb3d.appspot.com/o/DoctorStranger2014%2FD21.FUN-Doctor%20Stranger%20(Dakteo%20Yibangin)%20-%20Season%201%20Episode%202%20(2014)-720p.mp4?alt=media&token=",
      },
      {
        label: "Episode 3",
        url: "https://firebasestorage.googleapis.com/v0/b/login-9eb3d.appspot.com/o/DoctorStranger2014%2FD21.FUN-Doctor%20Stranger%20(Dakteo%20Yibangin)%20-%20Season%201%20Episode%203%20(2014)-720p.mp4?alt=media&token=",
      },
      {
        label: "Episode 4",
        url: "https://firebasestorage.googleapis.com/v0/b/login-9eb3d.appspot.com/o/DoctorStranger2014%2FD21.FUN-Doctor%20Stranger%20(Dakteo%20Yibangin)%20-%20Season%201%20Episode%204%20(2014)-720p.mp4?alt=media&token=",
      },
      {
        label: "Episode 5",
        url: "https://firebasestorage.googleapis.com/v0/b/login-9eb3d.appspot.com/o/DoctorStranger2014%2FD21.FUN-Doctor%20Stranger%20(Dakteo%20Yibangin)%20-%20Season%201%20Episode%205%20(2014)-720p.mp4?alt=media&token=",
      },
      {
        label: "Episode 6",
        url: "https://firebasestorage.googleapis.com/v0/b/login-9eb3d.appspot.com/o/DoctorStranger2014%2FD21.FUN-Doctor%20Stranger%20(Dakteo%20Yibangin)%20-%20Season%201%20Episode%206%20(2014)-720p.mp4?alt=media&token=",
      },
      {
        label: "Episode 7",
        url: "https://firebasestorage.googleapis.com/v0/b/login-9eb3d.appspot.com/o/DoctorStranger2014%2FD21.FUN-Doctor%20Stranger%20(Dakteo%20Yibangin)%20-%20Season%201%20Episode%207%20(2014)-720p.mp4?alt=media&token=",
      },
      {
        label: "Episode 8",
        url: "https://firebasestorage.googleapis.com/v0/b/login-9eb3d.appspot.com/o/DoctorStranger2014%2FD21.FUN-Doctor%20Stranger%20(Dakteo%20Yibangin)%20-%20Season%201%20Episode%208%20(2014)-720p.mp4?alt=media&token=",
      },
      {
        label: "Episode 9",
        url: "https://firebasestorage.googleapis.com/v0/b/login-9eb3d.appspot.com/o/DoctorStranger2014%2FD21.FUN-Doctor%20Stranger%20(Dakteo%20Yibangin)%20-%20Season%201%20Episode%209%20(2014)-720p.mp4?alt=media&token=",
      },
      {
        label: "Episode 10",
        url: "https://firebasestorage.googleapis.com/v0/b/login-9eb3d.appspot.com/o/DoctorStranger2014%2FD21.FUN-Doctor%20Stranger%20(Dakteo%20Yibangin)%20-%20Season%201%20Episode%2010%20(2014)-720p.mp4?alt=media&token=",
      },
      {
        label: "Episode 11",
        url: "https://firebasestorage.googleapis.com/v0/b/login-9eb3d.appspot.com/o/DoctorStranger2014%2FD21.FUN-Doctor%20Stranger%20(Dakteo%20Yibangin)%20-%20Season%201%20Episode%2011%20(2014)-720p.mp4?alt=media&token=",
      },
      {
        label: "Episode 12",
        url: "https://firebasestorage.googleapis.com/v0/b/login-9eb3d.appspot.com/o/DoctorStranger2014%2FD21.FUN-Doctor%20Stranger%20(Dakteo%20Yibangin)%20-%20Season%201%20Episode%2012%20(2014)-720p.mp4?alt=media&token=",
      },
      {
        label: "Episode 13",
        url: "https://firebasestorage.googleapis.com/v0/b/login-9eb3d.appspot.com/o/DoctorStranger2014%2FD21.FUN-Doctor%20Stranger%20(Dakteo%20Yibangin)%20-%20Season%201%20Episode%2013%20(2014)-720p.mp4?alt=media&token=",
      },
      {
        label: "Episode 14",
        url: "https://firebasestorage.googleapis.com/v0/b/login-9eb3d.appspot.com/o/DoctorStranger2014%2FD21.FUN-Doctor%20Stranger%20(Dakteo%20Yibangin)%20-%20Season%201%20Episode%2014%20(2014)-720p.mp4?alt=media&token=",
      },
      {
        label: "Episode 15",
        url: "https://firebasestorage.googleapis.com/v0/b/login-9eb3d.appspot.com/o/DoctorStranger2014%2FD21.FUN-Doctor%20Stranger%20(Dakteo%20Yibangin)%20-%20Season%201%20Episode%2015%20(2014)-720p.mp4?alt=media&token=",
      },
      {
        label: "Episode 16",
        url: "https://firebasestorage.googleapis.com/v0/b/login-9eb3d.appspot.com/o/DoctorStranger2014%2FD21.FUN-Doctor%20Stranger%20(Dakteo%20Yibangin)%20-%20Season%201%20Episode%2016%20(2014)-720p.mp4?alt=media&token=",
      },
      {
        label: "Episode 17",
        url: "https://firebasestorage.googleapis.com/v0/b/login-9eb3d.appspot.com/o/DoctorStranger2014%2FD21.FUN-Doctor%20Stranger%20(Dakteo%20Yibangin)%20-%20Season%201%20Episode%2017%20(2014)-720p.mp4?alt=media&token=",
      },
      {
        label: "Episode 18",
        url: "https://firebasestorage.googleapis.com/v0/b/login-9eb3d.appspot.com/o/DoctorStranger2014%2FD21.FUN-Doctor%20Stranger%20(Dakteo%20Yibangin)%20-%20Season%201%20Episode%2018%20(2014)-720p.mp4?alt=media&token=",
      },
      {
        label: "Episode 19",
        url: "https://firebasestorage.googleapis.com/v0/b/login-9eb3d.appspot.com/o/DoctorStranger2014%2FD21.FUN-Doctor%20Stranger%20(Dakteo%20Yibangin)%20-%20Season%201%20Episode%2019%20(2014)-720p.mp4?alt=media&token=",
      },
      {
        label: "Episode 20",
        url: "https://firebasestorage.googleapis.com/v0/b/login-9eb3d.appspot.com/o/DoctorStranger2014%2FD21.FUN-Doctor%20Stranger%20(Dakteo%20Yibangin)%20-%20Season%201%20Episode%2020%20(2014)-720p.mp4?alt=media&token=",
      },
    ],
  },
  {
    title: "Revolutionary Love (2017)",
    slug: "revolutionary-love-2017",
    type: "Serial",
    genre: ["Drama", "Komedi"],
    country: "Korea",
    poster:
      "https://blogger.googleusercontent.com/img/a/AVvXsEixtae09lax2_Qqd_wL-4SV0HTpDLMtVslL_Wsp3v5EBUb1I3NH6g_qQea5jcT3LtuW_XfRQhSKyFKZ6fghr5hbQnOR1IrObnYaATj6pzwxCyiqi4mj3O2IaLnSHvn0vrPQWtEYEuFNGLlhAR0alolU11iKt862sbvr90LksAhuo-_OHw_p898PyrS8",
    image:
      "https://thumbor.prod.vidiocdn.com/KdCLJ13cxTIEUnQ4ITHGYYxAXRc=/960x540/filters:quality(75)/vidio-media-production/uploads/image/source/4476/6c772c.jpg",
    episodes: [
      {
        label: "Trailer Song",
        url: "https://firebasestorage.googleapis.com/v0/b/bangden-com.appspot.com/o/upload%2FLove%20Revolutionary%20Trailer.mp4?alt=media&token=",
      },
      {
        label: "Episode 1",
        url: "https://firebasestorage.googleapis.com/v0/b/bangden-com.appspot.com/o/upload%2FD21.FUN-Revolutionary%20Love%20-%20Season%201%20Episode%201%20(2017)-1080p.mp4?alt=media&token=",
      },
      {
        label: "Episode 2",
        url: "https://firebasestorage.googleapis.com/v0/b/bangden-com.appspot.com/o/upload%2FD21.FUN-Revolutionary-Love-2017-E02-1667975775.mp4?alt=media&token=",
      },
      {
        label: "Episode 3",
        url: "https://firebasestorage.googleapis.com/v0/b/bangden-com.appspot.com/o/upload%2FD21.FUN-Revolutionary%20Love%20-%20Season%201%20Episode%203%20(2017)-1080p.mp4?alt=media&token=",
      },
      {
        label: "Episode 4",
        url: "https://firebasestorage.googleapis.com/v0/b/bangden-com.appspot.com/o/upload%2FD21.FUN-Revolutionary%20Love%20-%20Season%201%20Episode%204%20(2017)-1080p.mp4?alt=media&token=",
      },
      {
        label: "Episode 5",
        url: "https://firebasestorage.googleapis.com/v0/b/bangden-com.appspot.com/o/upload%2FD21.FUN-Revolutionary-Love-2017-E05-1667976006.mp4?alt=media&token=",
      },
      {
        label: "Episode 6",
        url: "https://firebasestorage.googleapis.com/v0/b/bangden-com.appspot.com/o/upload%2FD21.FUN-Revolutionary%20Love%20-%20Season%201%20Episode%206%20(2017)-1080p.mp4?alt=media&token=",
      },
      {
        label: "Episode 7",
        url: "https://firebasestorage.googleapis.com/v0/b/bangden-com.appspot.com/o/upload%2FD21.FUN-Revolutionary%20Love%20-%20Season%201%20Episode%207%20(2017)-1080p.mp4?alt=media&token=",
      },
      {
        label: "Episode 8",
        url: "https://firebasestorage.googleapis.com/v0/b/bangden-com.appspot.com/o/upload%2FD21.FUN-Revolutionary%20Love%20-%20Season%201%20Episode%208%20(2017)-1080p.mp4?alt=media&token=",
      },
      {
        label: "Episode 9",
        url: "https://firebasestorage.googleapis.com/v0/b/bangden-com.appspot.com/o/upload%2FD21.FUN-Revolutionary%20Love%20-%20Season%201%20Episode%209%20(2017)-1080p.mp4?alt=media&token=",
      },
      {
        label: "Episode 10",
        url: "https://firebasestorage.googleapis.com/v0/b/bangden-com.appspot.com/o/upload%2FSalinan%20D21.FUN-Revolutionary%20Love%20-%20Season%201%20Episode%2010%20(2017)-1080p.mp4?alt=media&token=",
      },
      {
        label: "Episode 11",
        url: "https://firebasestorage.googleapis.com/v0/b/bangden-com.appspot.com/o/upload%2FSalinan%20D21.FUN-Revolutionary%20Love%20-%20Season%201%20Episode%2011%20(2017)-1080p.mp4?alt=media&token=",
      },
      {
        label: "Episode 12",
        url: "https://firebasestorage.googleapis.com/v0/b/bangden-com.appspot.com/o/upload%2FSalinan%20D21.FUN-Revolutionary%20Love%20-%20Season%201%20Episode%2012%20(2017)-1080p.mp4?alt=media&token=",
      },
      {
        label: "Episode 13",
        url: "https://firebasestorage.googleapis.com/v0/b/bangden-com.appspot.com/o/upload%2FSalinan%20D21.FUN-Revolutionary%20Love%20-%20Season%201%20Episode%2013%20(2017)-1080p.mp4?alt=media&token=",
      },
      {
        label: "Episode 14",
        url: "https://firebasestorage.googleapis.com/v0/b/bangden-com.appspot.com/o/upload%2FSalinan%20D21.FUN-Revolutionary%20Love%20-%20Season%201%20Episode%2014%20(2017)-1080p.mp4?alt=media&token=",
      },
      {
        label: "Episode 15",
        url: "https://firebasestorage.googleapis.com/v0/b/bangden-com.appspot.com/o/upload%2FSalinan%20D21.FUN-Revolutionary%20Love%20-%20Season%201%20Episode%2015%20(2017)-1080p.mp4?alt=media&token=",
      },
      {
        label: "Episode 16",
        url: "https://firebasestorage.googleapis.com/v0/b/bangden-com.appspot.com/o/upload%2FSalinan%20D21.FUN-Revolutionary%20Love%20-%20Season%201%20Episode%2016%20(2017)-1080p.mp4?alt=media&token=",
      },
    ],
  },
  {
    title: "The Inheritors (2013)",
    slug: "the-inheritors-2013",
    type: "Serial",
    genre: ["Drama", "Komedi"],
    country: "Korea",
    poster:
      "https://blogger.googleusercontent.com/img/a/AVvXsEhIsAKGDcfCUMtGDUqt7clPSzVkioHamHugExqP7oAOU6u4oxnDqIYXqTuytb45tKc_szIl8We5VHV1gSJ4MjzHJOhSiewZD3ukgIa2uEUe081oTkzEo01mH0XIOYGSrNEq7ha_EJ40_2nBn9zhAC4KvY5F_GhgF39N7ew6pIAKkjPQI_Lb7bh9a8rC",
    image:
      "https://thumbor.prod.vidiocdn.com/KdCLJ13cxTIEUnQ4ITHGYYxAXRc=/960x540/filters:quality(75)/vidio-media-production/uploads/image/source/4476/6c772c.jpg",
    episodes: [
      {
        label: "Episode 1",
        url: "https://firebasestorage.googleapis.com/v0/b/filetest-d7b65.appspot.com/o/The%20Heir%202013%2FD21.FUN-Heirs%20(Sangsogjadeul)%20-%20Season%201%20Episode%201%20(2013)-720p.mp4?alt=media&token=",
      },
      {
        label: "Episode 2",
        url: "https://firebasestorage.googleapis.com/v0/b/filetest-d7b65.appspot.com/o/The%20Heir%202013%2FD21.FUN-Heirs%20(Sangsogjadeul)%20-%20Season%201%20Episode%202%20(2013)-720p.mp4?alt=media&token=",
      },
      {
        label: "Episode 3",
        url: "https://firebasestorage.googleapis.com/v0/b/filetest-d7b65.appspot.com/o/The%20Heir%202013%2FD21.FUN-Heirs%20(Sangsogjadeul)%20-%20Season%201%20Episode%203%20(2013)-1080p.mp4?alt=media&token=",
      },
      {
        label: "Episode 4",
        url: "https://firebasestorage.googleapis.com/v0/b/filetest-d7b65.appspot.com/o/The%20Heir%202013%2FD21.FUN-Heirs%20(Sangsogjadeul)%20-%20Season%201%20Episode%204%20(2013)-720p.mp4?alt=media&token=",
      },
      {
        label: "Episode 5",
        url: "https://firebasestorage.googleapis.com/v0/b/filetest-d7b65.appspot.com/o/The%20Heir%202013%2FD21.FUN-Heirs%20(Sangsogjadeul)%20-%20Season%201%20Episode%205%20(2013)-720p.mp4?alt=media&token=",
      },
      {
        label: "Episode 6",
        url: "https://firebasestorage.googleapis.com/v0/b/filetest-d7b65.appspot.com/o/The%20Heir%202013%2FD21.FUN-Heirs%20(Sangsogjadeul)%20-%20Season%201%20Episode%206%20(2013)-720p.mp4?alt=media&token=",
      },
      {
        label: "Episode 7",
        url: "https://firebasestorage.googleapis.com/v0/b/filetest-d7b65.appspot.com/o/The%20Heir%202013%2FD21.FUN-Heirs%20(Sangsogjadeul)%20-%20Season%201%20Episode%207%20(2013)-720p.mp4?alt=media&token=",
      },
      {
        label: "Episode 8",
        url: "https://firebasestorage.googleapis.com/v0/b/filetest-d7b65.appspot.com/o/The%20Heir%202013%2FD21.FUN-Heirs%20(Sangsogjadeul)%20-%20Season%201%20Episode%208%20(2013)-720p.mp4?alt=media&token=",
      },
      {
        label: "Episode 9",
        url: "https://firebasestorage.googleapis.com/v0/b/filetest-d7b65.appspot.com/o/The%20Heir%202013%2FD21.FUN-Heirs%20(Sangsogjadeul)%20-%20Season%201%20Episode%209%20(2013)-720p.mp4?alt=media&token=",
      },
      {
        label: "Episode 10",
        url: "https://firebasestorage.googleapis.com/v0/b/filetest-d7b65.appspot.com/o/The%20Heir%202013%2FD21.FUN-Heirs%20(Sangsogjadeul)%20-%20Season%201%20Episode%2010%20(2013)-720p.mp4?alt=media&token=",
      },
      {
        label: "Episode 11",
        url: "https://firebasestorage.googleapis.com/v0/b/filetest-d7b65.appspot.com/o/The%20Heir%202013%2FD21.FUN-Heirs%20(Sangsogjadeul)%20-%20Season%201%20Episode%2011%20(2013)-720p.mp4?alt=media&token=",
      },
      {
        label: "Episode 12",
        url: "https://firebasestorage.googleapis.com/v0/b/filetest-d7b65.appspot.com/o/The%20Heir%202013%2FD21.FUN-Heirs%20(Sangsogjadeul)%20-%20Season%201%20Episode%2012%20(2013)-720p.mp4?alt=media&token=",
      },
      {
        label: "Episode 13",
        url: "https://firebasestorage.googleapis.com/v0/b/filetest-d7b65.appspot.com/o/The%20Heir%202013%2FD21.FUN-Heirs%20(Sangsogjadeul)%20-%20Season%201%20Episode%2013%20(2013)-720p.mp4?alt=media&token=",
      },
      {
        label: "Episode 14",
        url: "https://firebasestorage.googleapis.com/v0/b/filetest-d7b65.appspot.com/o/The%20Heir%202013%2FD21.FUN-Heirs%20(Sangsogjadeul)%20-%20Season%201%20Episode%2014%20(2013)-720p.mp4?alt=media&token=",
      },
      {
        label: "Episode 15",
        url: "https://firebasestorage.googleapis.com/v0/b/filetest-d7b65.appspot.com/o/The%20Heir%202013%2FD21.FUN-Heirs%20(Sangsogjadeul)%20-%20Season%201%20Episode%2015%20(2013)-720p.mp4?alt=media&token=",
      },
      {
        label: "Episode 16",
        url: "https://firebasestorage.googleapis.com/v0/b/filetest-d7b65.appspot.com/o/The%20Heir%202013%2FD21.FUN-Heirs%20(Sangsogjadeul)%20-%20Season%201%20Episode%2016%20(2013)-720p.mp4?alt=media&token=",
      },
      {
        label: "Episode 17",
        url: "https://firebasestorage.googleapis.com/v0/b/filetest-d7b65.appspot.com/o/The%20Heir%202013%2FD21.FUN-Heirs%20(Sangsogjadeul)%20-%20Season%201%20Episode%2017%20(2013)-720p.mp4?alt=media&token=",
      },
      {
        label: "Episode 18",
        url: "https://firebasestorage.googleapis.com/v0/b/filetest-d7b65.appspot.com/o/The%20Heir%202013%2FD21.FUN-Heirs%20(Sangsogjadeul)%20-%20Season%201%20Episode%2018%20(2013)-720p.mp4?alt=media&token=",
      },
      {
        label: "Episode 19",
        url: "https://firebasestorage.googleapis.com/v0/b/filetest-d7b65.appspot.com/o/The%20Heir%202013%2FD21.FUN-Heirs%20(Sangsogjadeul)%20-%20Season%201%20Episode%2019%20(2013)-720p.mp4?alt=media&token=",
      },
      {
        label: "Episode 20",
        url: "https://firebasestorage.googleapis.com/v0/b/filetest-d7b65.appspot.com/o/The%20Heir%202013%2FD21.FUN-Heirs%20(Sangsogjadeul)%20-%20Season%201%20Episode%2020%20(2013)-720p.mp4?alt=media&token=",
      },
    ],
  },
  {
    title: "Pinocchio (2014)",
    slug: "pinocchio-2014",
    type: "Serial",
    genre: ["Drama", "Komedi"],
    country: "Korea",
    poster:
      "https://blogger.googleusercontent.com/img/a/AVvXsEi4p4LmcyWqZ1tbX7qBQ-G8xLa-VBXwYm-75xTfuLKDGgIaaZSZweRpGslNV9WULGYIAlnAB550CnMAmad-WES2IzkW2pkrVz__MfPDGDiKwlRF4FFD3qCioY0IcnBTw8Npo6M6mE-UMzIV44Y_WDN8c2FzLgAKw4vuos_JPLzcTWxscb8lWF1OaYb8",
    image:
      "https://thumbor.prod.vidiocdn.com/KdCLJ13cxTIEUnQ4ITHGYYxAXRc=/960x540/filters:quality(75)/vidio-media-production/uploads/image/source/4476/6c772c.jpg",
    episodes: [
      {
        label: "Episode 1",
        url: "https://firebasestorage.googleapis.com/v0/b/bangden-com.appspot.com/o/upload%2FD21%20FUN%20Pinocchio%20season%201%20episode%201%202014%20mp4.mp4?alt=media&token=",
      },
      {
        label: "Episode 2",
        url: "https://firebasestorage.googleapis.com/v0/b/bangden-com.appspot.com/o/upload%2FD21%20FUN%20Pinocchio%20season%201%20episode%202%202014%20mp4.mp4?alt=media&token=",
      },
      {
        label: "Episode 3",
        url: "https://firebasestorage.googleapis.com/v0/b/bangden-com.appspot.com/o/upload%2FD21%20FUN%20Pinocchio%20season%201%20episode%203%202014%20mp4.mp4?alt=media&token=",
      },
      {
        label: "Episode 4",
        url: "https://firebasestorage.googleapis.com/v0/b/bangden-com.appspot.com/o/upload%2FD21%20FUN%20Pinocchio%20season%201%20episode%204%202014%20mp4.mp4?alt=media&token=",
      },
      {
        label: "Episode 5",
        url: "https://firebasestorage.googleapis.com/v0/b/bangden-com.appspot.com/o/upload%2FD21%20FUN%20Pinocchio%20season%201%20episode%205%202014%20mp4.mp4?alt=media&token=",
      },
      {
        label: "Episode 6",
        url: "https://firebasestorage.googleapis.com/v0/b/bangden-com.appspot.com/o/upload%2Fpinocchio%20season%201%20episode%206%202014%20mp4.mp4?alt=media&token=",
      },
      {
        label: "Episode 7",
        url: "https://firebasestorage.googleapis.com/v0/b/bangden-com.appspot.com/o/upload%2FD21%20FUN%20Pinocchio%20season%201%20episode%207%202014%20mp4.mp4?alt=media&token=",
      },
      {
        label: "Episode 8",
        url: "https://firebasestorage.googleapis.com/v0/b/bangden-com.appspot.com/o/upload%2FD21%20FUN%20Pinocchio%20season%201%20episode%208%202014%20mp4.mp4?alt=media&token=",
      },
      {
        label: "Episode 9",
        url: "https://firebasestorage.googleapis.com/v0/b/bangden-com.appspot.com/o/upload%2FD21%20FUN%20Pinocchio%20season%201%20episode%209%202014%20mp4.mp4?alt=media&token=",
      },
      {
        label: "Episode 10",
        url: "https://firebasestorage.googleapis.com/v0/b/bangden-com.appspot.com/o/upload%2FD21%20FUN%20Pinocchio%20season%201%20episode%2010%202014%20mp4.mp4?alt=media&token=",
      },
      {
        label: "Episode 11",
        url: "https://firebasestorage.googleapis.com/v0/b/bangden-com.appspot.com/o/upload%2FD21%20FUN%20Pinocchio%20season%201%20episode%2011%202014%20mp4.mp4?alt=media&token=",
      },
      {
        label: "Episode 12",
        url: "https://firebasestorage.googleapis.com/v0/b/bangden-com.appspot.com/o/upload%2FD21%20FUN%20Pinocchio%20season%201%20episode%2012%202014%20mp4.mp4?alt=media&token=",
      },
      {
        label: "Episode 13",
        url: "https://firebasestorage.googleapis.com/v0/b/bangden-com.appspot.com/o/upload%2FD21%20FUN%20Pinocchio%20season%201%20episode%2013%202014%20mp4.mp4?alt=media&token=",
      },
      {
        label: "Episode 14",
        url: "https://firebasestorage.googleapis.com/v0/b/bangden-com.appspot.com/o/upload%2FD21%20FUN%20Pinocchio%20season%201%20episode%2014%202014%20mp4.mp4?alt=media&token=",
      },
      {
        label: "Episode 15",
        url: "https://firebasestorage.googleapis.com/v0/b/bangden-com.appspot.com/o/upload%2FD21%20FUN%20Pinocchio%20season%201%20episode%2015%202014%20mp4.mp4?alt=media&token=",
      },
      {
        label: "Episode 16",
        url: "https://firebasestorage.googleapis.com/v0/b/bangden-com.appspot.com/o/upload%2FD21%20FUN%20Pinocchio%20season%201%20episode%2016%202014%20mp4.mp4?alt=media&token=",
      },
      {
        label: "Episode 17",
        url: "https://firebasestorage.googleapis.com/v0/b/bangden-com.appspot.com/o/upload%2FD21%20FUN%20Pinocchio%20season%201%20episode%2017%202014%20mp4.mp4?alt=media&token=",
      },
      {
        label: "Episode 18",
        url: "https://firebasestorage.googleapis.com/v0/b/bangden-com.appspot.com/o/upload%2FD21%20FUN%20Pinocchio%20season%201%20episode%2018%202014%20mp4.mp4?alt=media&token=",
      },
      {
        label: "Episode 19",
        url: "https://firebasestorage.googleapis.com/v0/b/bangden-com.appspot.com/o/upload%2FD21.FUN-Pinocchio%20-%20Season%201%20Episode%2019%20(2014)-720p.mp4?alt=media&token=",
      },
      {
        label: "Episode 20",
        url: "https://firebasestorage.googleapis.com/v0/b/bangden-com.appspot.com/o/upload%2FD21%20FUN%20Pinocchio%20season%201%20episode%2020%202014%20mp4.mp4?alt=media&token=",
      },
    ],
  },
  {
    title: "Romantic Doctor, Teacher Kim 1 (2016)",
    slug: "romantic-doctor-teacher-kim-1-2016",
    type: "Serial",
    genre: ["Drama", "Komedi"],
    country: "Korea",
    poster:
      "https://blogger.googleusercontent.com/img/a/AVvXsEgcjHNLAUeNEgU0Rn81C4kfwB-ZowoaqaBHaNQ-OEm3ru_gRUzD-GufWVOf5oiwLg5iVMfaqeNb_QGCvykb_GhWxzp2kF1AKBR_u6a910ERqyhDgWZi3LfRgbs-8v9XVfJrhciBg5uNvlOZfJiFdraYii10Y0ogZ8mPSziBHQq7YAZED1wBE7Ps8rkU=s320",
    image:
      "https://thumbor.prod.vidiocdn.com/KdCLJ13cxTIEUnQ4ITHGYYxAXRc=/960x540/filters:quality(75)/vidio-media-production/uploads/image/source/4476/6c772c.jpg",
    episodes: [
      {
        label: "Episode 1",
        url: "https://firebasestorage.googleapis.com/v0/b/bangden-com.appspot.com/o/upload%2FD21%20FUN%20Dr%20romantic%20nangmandakteo%20kimsaboo%20season%201%20episode%201%202016%20mp4.mp4?alt=media&token=",
      },
      {
        label: "Episode 2",
        url: "https://firebasestorage.googleapis.com/v0/b/bangden-com.appspot.com/o/upload%2FD21%20FUN%20Dr%20romantic%20nangmandakteo%20kimsaboo%20season%201%20episode%202%202016%20mp4.mp4?alt=media&token=",
      },
      {
        label: "Episode 3",
        url: "https://firebasestorage.googleapis.com/v0/b/bangden-com.appspot.com/o/upload%2FD21%20FUN%20Dr%20romantic%20nangmandakteo%20kimsaboo%20season%201%20episode%203%202016%20mp4.mp4?alt=media&token=",
      },
      {
        label: "Episode 4",
        url: "https://firebasestorage.googleapis.com/v0/b/bangden-com.appspot.com/o/upload%2FD21%20FUN%20Dr%20romantic%20nangmandakteo%20kimsaboo%20season%201%20episode%204%202016%20mp4.mp4?alt=media&token=",
      },
      {
        label: "Episode 5",
        url: "https://firebasestorage.googleapis.com/v0/b/bangden-com.appspot.com/o/upload%2Fdr-romantic-nangmandakteo-kimsaboo-season-1-episode-5-2016.mp4?alt=media&token=",
      },
      {
        label: "Episode 6",
        url: "https://firebasestorage.googleapis.com/v0/b/bangden-com.appspot.com/o/upload%2Fdr-romantic-nangmandakteo-kimsaboo-season-1-episode-6-2016.mp4?alt=media&token=",
      },
      {
        label: "Episode 7",
        url: "https://firebasestorage.googleapis.com/v0/b/bangden-com.appspot.com/o/upload%2FD21%20FUN%20Dr%20romantic%20nangmandakteo%20kimsaboo%20season%201%20episode%207%202016.mp4?alt=media&token=",
      },
      {
        label: "Episode 8",
        url: "https://firebasestorage.googleapis.com/v0/b/bangden-com.appspot.com/o/upload%2FD21%20FUN%20Dr%20romantic%20nangmandakteo%20kimsaboo%20season%201%20episode%208%202016.mp4?alt=media&token=",
      },
      {
        label: "Episode 9",
        url: "https://firebasestorage.googleapis.com/v0/b/bangden-com.appspot.com/o/upload%2FD21%20FUN%20Dr%20romantic%20nangmandakteo%20kimsaboo%20season%201%20episode%209%202016.mp4?alt=media&token=",
      },
      {
        label: "Episode 10",
        url: "https://firebasestorage.googleapis.com/v0/b/bangden-com.appspot.com/o/upload%2FD21%20FUN%20Dr%20romantic%20nangmandakteo%20kimsaboo%20season%201%20episode%2010.mp4?alt=media&token=",
      },
      {
        label: "Episode 11",
        url: "https://firebasestorage.googleapis.com/v0/b/bangden-com.appspot.com/o/upload%2FD21%20FUN%20Dr%20romantic%20nangmandakteo%20kimsaboo%20season%201%20episode%2011.mp4?alt=media&token=",
      },
      {
        label: "Episode 12",
        url: "https://firebasestorage.googleapis.com/v0/b/bangden-com.appspot.com/o/upload%2FD21%20FUN%20Dr%20romantic%20nangmandakteo%20kimsaboo%20season%201%20episode%2012.mp4?alt=media&token=",
      },
      {
        label: "Episode 13",
        url: "https://firebasestorage.googleapis.com/v0/b/bangden-com.appspot.com/o/upload%2FD21%20FUN%20Dr-romantic-nangmandakteo-kimsaboo-season-1-episode-13-2016.mp4?alt=media&token=",
      },
      {
        label: "Episode 14",
        url: "https://firebasestorage.googleapis.com/v0/b/bangden-com.appspot.com/o/upload%2FD21%20FUN%20Dr-romantic-nangmandakteo-kimsaboo-season-1-episode-14-2016.mp4?alt=media&token=",
      },
      {
        label: "Episode 15",
        url: "https://firebasestorage.googleapis.com/v0/b/bangden-com.appspot.com/o/upload%2FD21%20FUN%20Dr-romantic-nangmandakteo-kimsaboo-season-1-episode-15-2016.mp4?alt=media&token=",
      },
      {
        label: "Episode 16",
        url: "https://firebasestorage.googleapis.com/v0/b/bangden-com.appspot.com/o/upload%2FD21%20FUN%20Dr-romantic-nangmandakteo-kimsaboo-season-1-episode-16-2016.mp4?alt=media&token=",
      },
      {
        label: "Episode 17",
        url: "https://firebasestorage.googleapis.com/v0/b/bangden-com.appspot.com/o/upload%2FD21%20FUN%20Dr-romantic-nangmandakteo-kimsaboo-season-1-episode-17-2016.mp4?alt=media&token=",
      },
      {
        label: "Episode 18",
        url: "https://firebasestorage.googleapis.com/v0/b/bangden-com.appspot.com/o/upload%2FD21%20FUN%20Dr-romantic-nangmandakteo-kimsaboo-season-1-episode-18-2016.mp4?alt=media&token=",
      },
      {
        label: "Episode 19",
        url: "https://firebasestorage.googleapis.com/v0/b/bangden-com.appspot.com/o/upload%2FD21%20FUN%20Dr-romantic-nangmandakteo-kimsaboo-season-1-episode-19-2016.mp4?alt=media&token=",
      },
      {
        label: "Episode 20",
        url: "https://firebasestorage.googleapis.com/v0/b/bangden-com.appspot.com/o/upload%2FD21%20FUN%20Dr-romantic-nangmandakteo-kimsaboo-season-1-episode-20-2016.mp4?alt=media&token=",
      },
    ],
  },
  {
    title: "What's Wrong With Secretary Kim (2018)",
    slug: "whats-wrong-with-secretary-kim-2018",
    type: "Serial",
    genre: ["Drama", "Komedi"],
    country: "Korea",
    poster:
      "https://blogger.googleusercontent.com/img/a/AVvXsEg7a0lMbqVnOKmAN3FeomXAHa7Mg64X9WivsQuEUfyiCk3OApAM5-2ynQfgxXZpSatOztskN8hM8R3q6PEZN4y3h6O5LTZ2DdNo2F_u8siUAUR20wzmMk36ekT7l2AMJAzXmlFU-Tpo88VTgWFSuoPs5MbSIGnOhzJk2gM40ujcNgW6VxpcjPMRBWIY",
    image:
      "https://thumbor.prod.vidiocdn.com/KdCLJ13cxTIEUnQ4ITHGYYxAXRc=/960x540/filters:quality(75)/vidio-media-production/uploads/image/source/4476/6c772c.jpg",
    episodes: [
      {
        label: "Episode 1",
        url: "https://firebasestorage.googleapis.com/v0/b/bangden-com.appspot.com/o/upload%2FD21.FUN-What's%20Wrong%20with%20Secretary%20Kim%20(Kimbiseoga%20wae%20geureolkka)%20-%20Season%201%20Episode%201%20(2018)-1080p.mp4?alt=media&token=",
      },
      {
        label: "Episode 2",
        url: "https://firebasestorage.googleapis.com/v0/b/bangden-com.appspot.com/o/upload%2FD21.FUN-What's%20Wrong%20with%20Secretary%20Kim%20(Kimbiseoga%20wae%20geureolkka)%20-%20Season%201%20Episode%202%20(2018)-1080p.mp4?alt=media&token=",
      },
      {
        label: "Episode 3",
        url: "https://firebasestorage.googleapis.com/v0/b/bangden-com.appspot.com/o/upload%2FD21.FUN-What's%20Wrong%20with%20Secretary%20Kim%20(Kimbiseoga%20wae%20geureolkka)%20-%20Season%201%20Episode%203%20(2018)-1080p.mp4?alt=media&token=",
      },
      {
        label: "Episode 4",
        url: "https://firebasestorage.googleapis.com/v0/b/bangden-com.appspot.com/o/upload%2FD21.FUN-What's%20Wrong%20with%20Secretary%20Kim%20(Kimbiseoga%20wae%20geureolkka)%20-%20Season%201%20Episode%204%20(2018)-1080p.mp4?alt=media&token=",
      },
      {
        label: "Episode 5",
        url: "https://firebasestorage.googleapis.com/v0/b/bangden-com.appspot.com/o/upload%2FD21.FUN-What's%20Wrong%20with%20Secretary%20Kim%20(Kimbiseoga%20wae%20geureolkka)%20-%20Season%201%20Episode%205%20(2018)-1080p.mp4?alt=media&token=",
      },
      {
        label: "Episode 6",
        url: "https://firebasestorage.googleapis.com/v0/b/bangden-com.appspot.com/o/upload%2FD21%20FUN%20Whats%20wrong%20with%20secretary%20kim%20kimbiseoga%20wae%20geureolkka%20season%201%20episode%206%202018%20mp4.mp4?alt=media&token=",
      },
      {
        label: "Episode 7",
        url: "https://firebasestorage.googleapis.com/v0/b/bangden-com.appspot.com/o/upload%2FD21%20FUN%20Whats%20wrong%20with%20secretary%20kim%20kimbiseoga%20wae%20geureolkka%20season%201%20episode%207%202018%20mp4.mp4?alt=media&token=",
      },
      {
        label: "Episode 8",
        url: "https://firebasestorage.googleapis.com/v0/b/bangden-com.appspot.com/o/upload%2FD21%20FUN%20Whats%20wrong%20with%20secretary%20kim%20kimbiseoga%20wae%20geureolkka%20season%201%20episode%208%202018%20mp4.mp4?alt=media&token=",
      },
      {
        label: "Episode 9",
        url: "https://firebasestorage.googleapis.com/v0/b/bangden-com.appspot.com/o/upload%2FD21%20FUN%20Whats%20wrong%20with%20secretary%20kim%20kimbiseoga%20wae%20geureolkka%20season%201%20episode%209%202018%20mp4.mp4?alt=media&token=",
      },
      {
        label: "Episode 10",
        url: "https://firebasestorage.googleapis.com/v0/b/bangden-com.appspot.com/o/upload%2FD21%20FUN%20Whats%20wrong%20with%20secretary%20kim%20kimbiseoga%20wae%20geureolkka%20season%201%20episode%2010%202018%20mp4.mp4?alt=media&token=",
      },
      {
        label: "Episode 11",
        url: "https://firebasestorage.googleapis.com/v0/b/bangden-com.appspot.com/o/upload%2FD21%20FUN%20Whats%20wrong%20with%20secretary%20kim%20kimbiseoga%20wae%20geureolkka%20season%201%20episode%2011%202018%20mp4.mp4?alt=media&token=",
      },
      {
        label: "Episode 12",
        url: "https://firebasestorage.googleapis.com/v0/b/bangden-com.appspot.com/o/upload%2FD21%20FUN%20Whats%20wrong%20with%20secretary%20kim%20kimbiseoga%20wae%20geureolkka%20season%201%20episode%2012%202018%20mp4.mp4?alt=media&token=",
      },
      {
        label: "Episode 13",
        url: "https://firebasestorage.googleapis.com/v0/b/bangden-com.appspot.com/o/upload%2FD21%20FUN%20Whats%20wrong%20with%20secretary%20kim%20kimbiseoga%20wae%20geureolkka%20season%201%20episode%2013%202018%20mp4.mp4?alt=media&token=",
      },
      {
        label: "Episode 14",
        url: "https://firebasestorage.googleapis.com/v0/b/bangden-com.appspot.com/o/upload%2FD21%20FUN%20Whats%20wrong%20with%20secretary%20kim%20kimbiseoga%20wae%20geureolkka%20season%201%20episode%2014%202018%20mp4.mp4?alt=media&token=",
      },
      {
        label: "Episode 15",
        url: "https://firebasestorage.googleapis.com/v0/b/bangden-com.appspot.com/o/upload%2FD21%20FUN%20Whats%20wrong%20with%20secretary%20kim%20kimbiseoga%20wae%20geureolkka%20season%201%20episode%2015%202018%20mp4.mp4?alt=media&token=",
      },
      {
        label: "Episode 16",
        url: "https://firebasestorage.googleapis.com/v0/b/bangden-com.appspot.com/o/upload%2FD21.FUN-What's%20Wrong%20with%20Secretary%20Kim%20(Kimbiseoga%20wae%20geureolkka)%20-%20Season%201%20Episode%2016%20(2018)-1080p.mp4?alt=media&token=",
      },
    ],
  },
  {
    title: "Blood Free (2024) - Season 1",
    slug: "blood-free-2024-season-1",
    type: "Serial",
    genre: ["Drama", "Komedi"],
    country: "Korea",
    poster:
      "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/gxd86XTik9QfPLXxbMiMdsg407V.jpg",
    image:
      "https://media.themoviedb.org/t/p/w533_and_h300_bestv2/e8Wc24ZfbJngAQBkIDape6OOku0.jpg",
    episodes: [
      {
        label: "Episode 1",
        url: "https://firebasestorage.googleapis.com/v0/b/bangden-com.appspot.com/o/upload%2FD21%20FUN%20Blood%20Free%20Season%201%20Episode%201%202024%201713533472%20mp4.mp4?alt=media&token=",
      },
      {
        label: "Episode 2",
        url: "https://firebasestorage.googleapis.com/v0/b/bangden-com.appspot.com/o/upload%2FD21%20FUN%20Blood%20Free%20Season%201%20Episode%202%202024%201713533491%20mp4.mp4?alt=media&token=",
      },
      {
        label: "Episode 3",
        url: "https://firebasestorage.googleapis.com/v0/b/bangden-com.appspot.com/o/upload%2FD21%20FUN%20Blood%20Free%20Season%201%20Episode%203%202024%201713533518%20mp4.mp4?alt=media&token=",
      },
      {
        label: "Episode 4",
        url: "https://firebasestorage.googleapis.com/v0/b/bangden-com.appspot.com/o/upload%2FD21%20FUN%20Blood%20Free%20Season%201%20Episode%204%202024%201713533535%20mp4.mp4?alt=media&token=",
      },
      {
        label: "Episode 5",
        url: "https://firebasestorage.googleapis.com/v0/b/bangden-com.appspot.com/o/upload%2FD21%20FUN%20Blood%20Free%20Season%201%20Episode%205%202024%201713969185%20mp4.mp4?alt=media&token=",
      },
      {
        label: "Episode 6",
        url: "https://firebasestorage.googleapis.com/v0/b/bangden-com.appspot.com/o/upload%2FD21%20FUN%20Blood%20Free%20Season%201%20Episode%206%202024%201713969719%20mp4.mp4?alt=media&token=",
      },
      {
        label: "Episode 7",
        url: "https://firebasestorage.googleapis.com/v0/b/bangden-com.appspot.com/o/upload%2FD21%20FUN%20Blood%20Free%20Season%201%20Episode%207%202024%201714578920%20mp4.mp4?alt=media&token=",
      },
      {
        label: "Episode 8",
        url: "https://firebasestorage.googleapis.com/v0/b/bangden-com.appspot.com/o/upload%2FD21%20FUN%20Blood%20Free%20Season%201%20Episode%208%202024%201714578968mp4.mp4?alt=media&token=",
      },
      {
        label: "Episode 9",
        url: "https://firebasestorage.googleapis.com/v0/b/bangden-com.appspot.com/o/upload%2FD21%20FUN%20Blood%20Free%20Season%201%20Episode%209%202024%201715260204%20mp4.mp4?alt=media&token=",
      },
      {
        label: "Episode 10",
        url: "https://firebasestorage.googleapis.com/v0/b/bangden-com.appspot.com/o/upload%2FD21%20FUN%20Blood%20Free%20Season%201%20Episode%2010%202024%201715260322mp4.mp4?alt=media&token=",
      },
    ],
  },
  {
    title: "Lawless Lawyer (Mubeop Byeonhosa) (2018)",
    slug: "lawless-lawyer-2018",
    type: "Serial",
    genre: ["Drama", "Komedi"],
    country: "Korea",
    poster:
      "https://blogger.googleusercontent.com/img/a/AVvXsEg2zzNIq8PPMuQskBsFGLnWTXO6DKsRSlzvSRNAaXYrGi5Li2bhfauCauMs9fryJo10nNI3asC0iQIwm9HrkOMkbbKaYXfQePVMIwTezciTFy91xihYf8Kq4jKumsa5lsdBzVWNIHXO8tQZaQaYt6NRGUtiIReDNIt8y_YAsi7Vz0jo8Q0G7IdeYfcM=s320",
    image:
      "https://thumbor.prod.vidiocdn.com/Hjz7A3Z3Ck0IMb5iOIYJC4v-nR0=/960x540/filters:quality(75)/vidio-media-production/uploads/image/source/4555/d3c946.jpg",
    episodes: [
      {
        label: "Episode 1",
        url: "https://firebasestorage.googleapis.com/v0/b/bangden-com.appspot.com/o/upload%2FD21%20FUN%20Lawless%20lawyer%20mubeop%20byeonhosa%20season%201%20episode%201%202018%20mp4.mp4?alt=media&token=",
      },
      {
        label: "Episode 2",
        url: "https://firebasestorage.googleapis.com/v0/b/bangden-com.appspot.com/o/upload%2FD21%20FUN%20Lawless%20lawyer%20mubeop%20byeonhosa%20season%201%20episode%202%202018%20mp4.mp4?alt=media&token=",
      },
      {
        label: "Episode 3",
        url: "https://firebasestorage.googleapis.com/v0/b/bangden-com.appspot.com/o/upload%2FD21%20FUN%20Lawless%20lawyer%20mubeop%20byeonhosa%20season%201%20episode%203%202018%20mp4.mp4?alt=media&token=",
      },
      {
        label: "Episode 4",
        url: "https://firebasestorage.googleapis.com/v0/b/bangden-com.appspot.com/o/upload%2FD21%20FUN%20Lawless%20lawyer%20mubeop%20byeonhosa%20season%201%20episode%204%202018%20mp4.mp4?alt=media&token=",
      },
      {
        label: "Episode 5",
        url: "https://firebasestorage.googleapis.com/v0/b/bangden-com.appspot.com/o/upload%2FD21%20FUN%20Lawless%20lawyer%20mubeop%20byeonhosa%20season%201%20episode%205%202018%20mp4.mp4?alt=media&token=",
      },
      {
        label: "Episode 6",
        url: "https://firebasestorage.googleapis.com/v0/b/bangden-com.appspot.com/o/upload%2FD21%20FUN%20Lawless%20lawyer%20mubeop%20byeonhosa%20season%201%20episode%206%202018%20mp4.mp4?alt=media&token=",
      },
      {
        label: "Episode 7",
        url: "https://firebasestorage.googleapis.com/v0/b/bangden-com.appspot.com/o/upload%2FD21%20FUN%20Lawless%20lawyer%20mubeop%20byeonhosa%20season%201%20episode%207%202018%20mp4.mp4?alt=media&token=",
      },
      {
        label: "Episode 8",
        url: "https://firebasestorage.googleapis.com/v0/b/bangden-com.appspot.com/o/upload%2FD21%20FUN%20Lawless%20lawyer%20mubeopbyeonhosa-season-1-episode-8-2018-mp4.mp4?alt=media&token=",
      },
      {
        label: "Episode 9",
        url: "https://firebasestorage.googleapis.com/v0/b/bangden-com.appspot.com/o/upload%2FD21%20FUN%20Lawless%20lawyer%20mubeop%20byeonhosa%20season%201%20episode%209%202018%20mp4.mp4?alt=media&token=",
      },
      {
        label: "Episode 10",
        url: "https://firebasestorage.googleapis.com/v0/b/bangden-com.appspot.com/o/upload%2FD21%20FUN%20Lawless%20lawyer%20mubeop%20byeonhosa%20season%201%20episode%2010%202018%20mp4.mp4?alt=media&token=",
      },
      {
        label: "Episode 11",
        url: "https://firebasestorage.googleapis.com/v0/b/bangden-com.appspot.com/o/upload%2FD21%20FUN%20Lawless%20lawyer%20mubeopbyeonhosa-season-1-episode-11-2018-mp4.mp4?alt=media&token=",
      },
      {
        label: "Episode 12",
        url: "https://firebasestorage.googleapis.com/v0/b/bangden-com.appspot.com/o/upload%2FD21%20FUN%20Lawless%20lawyer%20mubeopbyeonhosa-season-1-episode-12-2018-mp4.mp4?alt=media&token=",
      },
      {
        label: "Episode 13",
        url: "https://firebasestorage.googleapis.com/v0/b/bangden-com.appspot.com/o/upload%2FD21%20FUN%20Lawless%20lawyer%20mubeopbyeonhosa-season-1-episode-13-2018-mp4.mp4?alt=media&token=",
      },
      {
        label: "Episode 14",
        url: "https://firebasestorage.googleapis.com/v0/b/bangden-com.appspot.com/o/upload%2FD21%20FUN%20Lawless%20lawyer%20mubeopbyeonhosa-season-1-episode-14-2018-mp4.mp4?alt=media&token=",
      },
      {
        label: "Episode 15",
        url: "https://firebasestorage.googleapis.com/v0/b/bangden-com.appspot.com/o/upload%2FD21%20FUN%20Lawless%20lawyer%20mubeopbyeonhosa-season-1-episode-15-2018-mp4.mp4?alt=media&token=",
      },
      {
        label: "Episode 16",
        url: "https://firebasestorage.googleapis.com/v0/b/bangden-com.appspot.com/o/upload%2FD21%20FUN%20Lawless%20lawyer%20mubeopbyeonhosa-season-1-episode-16-2018-mp4.mp4?alt=media&token=",
      },
    ],
  },
  {
    title: "Start-Up (Seutateueob) Season 1 (2020)",
    slug: "start-up-2020",
    type: "Serial",
    genre: ["Drama", "Komedi"],
    country: "Korea",
    poster:
      "https://blogger.googleusercontent.com/img/a/AVvXsEjEaTQd1nzpgHXcy1TEk3g5l2CziT0jtlL4tXFPOiC1lI5ECgSGJNBcaOusoxSM0mI8EiD0L46nxXZ32Ja20lPntR7Zy_2VXQCWABDkGM7p6KbRzrm6jlcY5b4Qbb8-rEa6y1GCtJhzyirf_Wwwxa6SORfGjKyGzXW7_i3_LTITF3aX3I3sYSocj-W0=s320",
    image:
      "https://firebasestorage.googleapis.com/v0/b/bangden-com.appspot.com/o/upload%2Fposter%20start%20up%202020.jpg?alt=media&token=",
    episodes: [
      {
        label: "Episode 1",
        url: "https://firebasestorage.googleapis.com/v0/b/bangden-com.appspot.com/o/upload%2FD21%20FUN%20Start%20up%20seutateueob%20season%201%20episode%201%202020%20mp4.mp4?alt=media&token=",
      },
      {
        label: "Episode 2",
        url: "https://firebasestorage.googleapis.com/v0/b/bangden-com.appspot.com/o/upload%2FD21%20FUN%20Start%20up%20seutateueob%20season%201%20episode%202%202020%20mp4.mp4?alt=media&token=",
      },
      {
        label: "Episode 3",
        url: "https://firebasestorage.googleapis.com/v0/b/bangden-com.appspot.com/o/upload%2FD21%20FUN%20Start%20up%20seutateueob%20season%201%20episode%203%202020%20mp4.mp4?alt=media&token=",
      },
      {
        label: "Episode 4",
        url: "https://firebasestorage.googleapis.com/v0/b/bangden-com.appspot.com/o/upload%2FD21%20FUN%20Start%20up%20seutateueob%20season%201%20episode%204%202020%20mp4.mp4?alt=media&token=",
      },
      {
        label: "Episode 5",
        url: "https://firebasestorage.googleapis.com/v0/b/bangden-com.appspot.com/o/upload%2FD21%20FUN%20Start%20up%20seutateueob%20season%201%20episode%205%202020%20mp4.mp4?alt=media&token=",
      },
      {
        label: "Episode 6",
        url: "https://firebasestorage.googleapis.com/v0/b/bangden-com.appspot.com/o/upload%2FD21%20FUN%20Start%20up%20seutateueob%20season%201%20episode%206%202020%20mp4.mp4?alt=media&token=",
      },
      {
        label: "Episode 7",
        url: "https://firebasestorage.googleapis.com/v0/b/bangden-com.appspot.com/o/upload%2FD21%20FUN%20Start%20up%20seutateueob%20season%201%20episode%207%202020%20mp4.mp4?alt=media&token=",
      },
      {
        label: "Episode 8",
        url: "https://firebasestorage.googleapis.com/v0/b/bangden-com.appspot.com/o/upload%2FD21%20FUN%20Startup-seutateueob-season-1-episode-8-2020-mp4.mp4?alt=media&token=",
      },
      {
        label: "Episode 9",
        url: "https://firebasestorage.googleapis.com/v0/b/bangden-com.appspot.com/o/upload%2FD21%20FUN%20Start%20up%20seutateueob%20season%201%20episode%209%202020%20mp4.mp4?alt=media&token=",
      },
      {
        label: "Episode 10",
        url: "https://firebasestorage.googleapis.com/v0/b/bangden-com.appspot.com/o/upload%2FD21%20FUN%20Start%20up%20seutateueob%20season%201%20episode%2010%202020%20mp4.mp4?alt=media&token=",
      },
      {
        label: "Episode 11",
        url: "https://firebasestorage.googleapis.com/v0/b/bangden-com.appspot.com/o/upload%2FD21%20FUN%20Start%20up%20seutateueob%20season%201%20episode%2011%202020%20mp4.mp4?alt=media&token=",
      },
      {
        label: "Episode 12",
        url: "https://firebasestorage.googleapis.com/v0/b/bangden-com.appspot.com/o/upload%2FD21%20FUN%20Start-up-seutateueob-season-1-episode-12-2020-mp4.mp4?alt=media&token=",
      },
      {
        label: "Episode 13",
        url: "https://firebasestorage.googleapis.com/v0/b/bangden-com.appspot.com/o/upload%2FD21%20FUN%20Start-up-seutateueob-season-1-episode-13-2020-mp4.mp4?alt=media&token=",
      },
      {
        label: "Episode 14",
        url: "https://firebasestorage.googleapis.com/v0/b/bangden-com.appspot.com/o/upload%2FD21%20FUN-startup-seutateueob-season-1-episode-14-2020-mp4.mp4?alt=media&token=",
      },
      {
        label: "Episode 15",
        url: "https://firebasestorage.googleapis.com/v0/b/bangden-com.appspot.com/o/upload%2FD21-FUN-startup-seutateueob-season-1-episode-15-2020-mp4.mp4?alt=media&token=",
      },
      {
        label: "Episode 16",
        url: "https://firebasestorage.googleapis.com/v0/b/bangden-com.appspot.com/o/upload%2FD21%20FUN%20Start%20up%20seutateueob%20season%201%20episode%2016%202020%20mp4.mp4?alt=media&token=",
      },
    ],
  },
  {
    title: "Yong-pal (The Gang Doctor) (2015)",
    slug: "yong-pal-the-gang-doctor-2015",
    type: "Serial",
    genre: ["Drama", "Komedi"],
    country: "Korea",
    poster:
      "https://thumbor.prod.vidiocdn.com/tPHYwTrtiVg19WYnNmiO-BH13GA=/223x332/filters:quality(75)/vidio-web-prod-film/uploads/film/image_portrait/642/the-gang-doctor-6f478d.jpg",
    image:
      "https://thumbor.prod.vidiocdn.com/_ju-uPZlKu0sXzkaXtvLJNwnXfs=/960x540/filters:quality(75)/vidio-web-prod-film/uploads/film/image_landscape/642/the-gang-doctor-e76123.jpg",
    episodes: [
      {
        label: "Episode 1",
        url: "https://firebasestorage.googleapis.com/v0/b/bangden-com.appspot.com/o/upload%2FD21%20FUN%20Yong%20pal%20season%201%20episode%201%202015%20mp4.mp4?alt=media&token=",
      },
      {
        label: "Episode 2",
        url: "https://firebasestorage.googleapis.com/v0/b/bangden-com.appspot.com/o/upload%2FD21%20FUN%20Yong%20pal%20season%201%20episode%202%202015%20mp4.mp4?alt=media&token=",
      },
      {
        label: "Episode 3",
        url: "https://firebasestorage.googleapis.com/v0/b/bangden-com.appspot.com/o/upload%2FD21%20FUN%20Yong%20pal%20season%201%20episode%203%202015%20mp4.mp4?alt=media&token=",
      },
      {
        label: "Episode 4",
        url: "https://firebasestorage.googleapis.com/v0/b/bangden-com.appspot.com/o/upload%2FD21%20FUN%20Yong%20pal%20season%201%20episode%204%202015%20mp4.mp4?alt=media&token=",
      },
      {
        label: "Episode 5",
        url: "https://firebasestorage.googleapis.com/v0/b/bangden-com.appspot.com/o/upload%2FD21%20FUN%20Yong%20pal%20season%201%20episode%205%202015%20mp4.mp4?alt=media&token=",
      },
      {
        label: "Episode 6",
        url: "https://firebasestorage.googleapis.com/v0/b/bangden-com.appspot.com/o/upload%2FD21%20FUN%20Yong%20pal%20season%201%20episode%206%202015%20mp4.mp4?alt=media&token=",
      },
      {
        label: "Episode 7",
        url: "https://firebasestorage.googleapis.com/v0/b/bangden-com.appspot.com/o/upload%2FD21%20FUN%20Yongpal-Season-1-Episode-7-2015-mp4.mp4?alt=media&token=",
      },
      {
        label: "Episode 8",
        url: "https://firebasestorage.googleapis.com/v0/b/bangden-com.appspot.com/o/upload%2FD21-FUN-Yong-pal-season-1-episode-8-2015-mp4.mp4?alt=media&token=",
      },
      {
        label: "Episode 9",
        url: "https://firebasestorage.googleapis.com/v0/b/bangden-com.appspot.com/o/upload%2FD21%20FUN%20Yongpal-Season-1-Episode-9-2015-mp4.mp4?alt=media&token=",
      },
      {
        label: "Episode 10",
        url: "https://firebasestorage.googleapis.com/v0/b/bangden-com.appspot.com/o/upload%2FD21%20FUN%20Yongpal-Season-1-Episode-10-2015-mp4.mp4?alt=media&token=",
      },
      {
        label: "Episode 11",
        url: "https://firebasestorage.googleapis.com/v0/b/bangden-com.appspot.com/o/upload%2FD21%20FUN%20Yongpal-Season-1-Episode-11-2015-mp4.mp4?alt=media&token=",
      },
      {
        label: "Episode 12",
        url: "https://firebasestorage.googleapis.com/v0/b/bangden-com.appspot.com/o/upload%2FD21%20FUN%20Yongpal-Season-1-Episode-12-2015-mp4.mp4?alt=media&token=",
      },
      {
        label: "Episode 13",
        url: "https://firebasestorage.googleapis.com/v0/b/bangden-com.appspot.com/o/upload%2FD21%20FUN%20Yongpal-Season-1-Episode-13-2015-mp4.mp4?alt=media&token=",
      },
      {
        label: "Episode 14",
        url: "https://firebasestorage.googleapis.com/v0/b/bangden-com.appspot.com/o/upload%2FD21%20FUN%20Yongpal-Season-1-Episode-14-2015-mp4.mp4?alt=media&token=",
      },
      {
        label: "Episode 15",
        url: "https://firebasestorage.googleapis.com/v0/b/bangden-com.appspot.com/o/upload%2FD21%20FUN%20Yongpal-Season-1-Episode-15-2015-mp4.mp4?alt=media&token=",
      },
      {
        label: "Episode 16",
        url: "https://firebasestorage.googleapis.com/v0/b/bangden-com.appspot.com/o/upload%2FD21%20FUN%20Yongpal-Season-1-Episode-16-2015-mp4.mp4?alt=media&token=",
      },
      {
        label: "Episode 17",
        url: "https://firebasestorage.googleapis.com/v0/b/bangden-com.appspot.com/o/upload%2FD21%20FUN%20Yongpal-Season-1-Episode-17-2015-mp4.mp4?alt=media&token=",
      },
      {
        label: "Episode 18",
        url: "https://firebasestorage.googleapis.com/v0/b/bangden-com.appspot.com/o/upload%2FD21%20FUN%20Yongpal-Season-1-Episode-18-2015-mp4.mp4?alt=media&token=",
      },
    ],
  },
  {
    title: "The K2 (2016)",
    slug: "the-k2-2016",
    type: "Serial",
    genre: ["Drama", "Komedi"],
    country: "Korea",
    poster:
      "https://blogger.googleusercontent.com/img/a/AVvXsEhz7RrHdHVTn44qx5g1jMo27WSHZmJceESLM6FHq-YWhr6csZ_fjeNd4WLKSUQgZjPeHIQ3lm_NYhePhksIsfnMUDA8qKG8Dr-6TjOY6Y53BQxjgYq6AhFkmozs8IvsZxcd9fGfRDy1D7D1gInSPO0rmz1mfLuC3Nb_ooS1q2GXw9G0BHYPY0jIs2cl=s320",
    image:
      "https://thumbor.prod.vidiocdn.com/U5wWX1Hqc5l4XuRkinHbHTsvC04=/960x540/filters:quality(75)/vidio-web-prod-film/uploads/film/image_landscape/39/the-k2-b68bf0.jpg",
    episodes: [
      {
        label: "Episode 1",
        url: "https://firebasestorage.googleapis.com/v0/b/bangden-com.appspot.com/o/upload%2FD21%20FUN%20The%20k2%20season%201%20episode%201%202016%20mp4.mp4?alt=media&token=",
      },
      {
        label: "Episode 2",
        url: "https://firebasestorage.googleapis.com/v0/b/bangden-com.appspot.com/o/upload%2FD21%20FUN%20The%20k2%20season%201%20episode%202%202016%20mp4.mp4?alt=media&token=",
      },
      {
        label: "Episode 3",
        url: "https://firebasestorage.googleapis.com/v0/b/bangden-com.appspot.com/o/upload%2FD21%20FUN%20The%20k2%20season%201%20episode%203%202016%20mp4.mp4?alt=media&token=",
      },
      {
        label: "Episode 4",
        url: "https://firebasestorage.googleapis.com/v0/b/bangden-com.appspot.com/o/upload%2FD21%20FUN%20The%20k2%20season%201%20episode%204%202016%20mp4.mp4?alt=media&token=",
      },
      {
        label: "Episode 5",
        url: "https://firebasestorage.googleapis.com/v0/b/bangden-com.appspot.com/o/upload%2FD21%20FUN%20The%20k2%20season%201%20episode%205%202016%20mp4.mp4?alt=media&token=",
      },
      {
        label: "Episode 6",
        url: "https://firebasestorage.googleapis.com/v0/b/bangden-com.appspot.com/o/upload%2FD21%20FUN%20The%20k2%20season%201%20episode%206%202016%20mp4.mp4?alt=media&token=",
      },
      {
        label: "Episode 7",
        url: "https://firebasestorage.googleapis.com/v0/b/bangden-com.appspot.com/o/upload%2FD21%20FUN%20The%20k2%20season%201%20episode%207%202016%20mp4.mp4?alt=media&token=",
      },
      {
        label: "Episode 8",
        url: "https://firebasestorage.googleapis.com/v0/b/bangden-com.appspot.com/o/upload%2FD21%20FUN%20The%20k2%20season%201%20episode%208%202016%20mp4.mp4?alt=media&token=",
      },
      {
        label: "Episode 9",
        url: "https://firebasestorage.googleapis.com/v0/b/bangden-com.appspot.com/o/upload%2FD21%20FUN%20The%20k2%20season%201%20episode%209%202016%20mp4.mp4?alt=media&token=",
      },
      {
        label: "Episode 10",
        url: "https://firebasestorage.googleapis.com/v0/b/bangden-com.appspot.com/o/upload%2FD21%20FUN%20The%20k2%20season%201%20episode%2010%202016%20mp4.mp4?alt=media&token=",
      },
      {
        label: "Episode 11",
        url: "https://firebasestorage.googleapis.com/v0/b/bangden-com.appspot.com/o/upload%2FD21%20FUN%20The%20k2%20season%201%20episode%2011%202016%20mp4.mp4?alt=media&token=",
      },
      {
        label: "Episode 12",
        url: "https://firebasestorage.googleapis.com/v0/b/bangden-com.appspot.com/o/upload%2FD21%20FUN%20The%20k2%20season%201%20episode%2012%202016%20mp4.mp4?alt=media&token=",
      },
      {
        label: "Episode 13",
        url: "https://firebasestorage.googleapis.com/v0/b/bangden-com.appspot.com/o/upload%2FD21%20FUN%20The%20k2%20season%201%20episode%2013%202016%20mp4.mp4?alt=media&token=",
      },
      {
        label: "Episode 14",
        url: "https://firebasestorage.googleapis.com/v0/b/bangden-com.appspot.com/o/upload%2FD21%20FUN%20The%20k2%20season%201%20episode%2014%202016%20mp4.mp4?alt=media&token=",
      },
      {
        label: "Episode 15",
        url: "https://firebasestorage.googleapis.com/v0/b/bangden-com.appspot.com/o/upload%2FD21%20FUN%20The%20k2%20season%201%20episode%2015%202016%20mp4.mp4?alt=media&token=",
      },
      {
        label: "Episode 16",
        url: "https://firebasestorage.googleapis.com/v0/b/bangden-com.appspot.com/o/upload%2FD21%20FUN%20The%20k2%20season%201%20episode%2016%202016%20mp4.mp4?alt=media&token=",
      },
    ],
  },
  {
    title: "Itaewon Class (Itaewon Keullasseu) (2020)",
    slug: "itaewon-class-2020",
    type: "Serial",
    genre: ["Drama", "Komedi"],
    country: "Korea",
    poster:
      "https://m.media-amazon.com/images/M/MV5BODEyZmVlMWEtYjNmNS00MTQ5LThlMzgtZjM4YjNhMGVkZWI4XkEyXkFqcGc@._V1_FMjpg_UX800_.jpg",
    image:
      "https://blackrose.id/wp-content/uploads/2020/03/itaewon_class-mp1_ratio-16x9-1.jpg",
    episodes: [
      {
        label: "Episode 1",
        url: "https://firebasestorage.googleapis.com/v0/b/bangden-com.appspot.com/o/upload%2FD21%20FUN%20Itaewon%20class%20itaewon%20keullasseu%20season%201%20episode%201%202020%20mp4.mp4?alt=media&token=",
      },
      {
        label: "Episode 2",
        url: "https://firebasestorage.googleapis.com/v0/b/bangden-com.appspot.com/o/upload%2FD21%20FUN%20Itaewon%20class%20itaewon%20keullasseu%20season%201%20episode%202%202020%20mp4.mp4?alt=media&token=",
      },
      {
        label: "Episode 3",
        url: "https://firebasestorage.googleapis.com/v0/b/bangden-com.appspot.com/o/upload%2FD21%20FUN%20Itaewon%20class%20itaewon%20keullasseu%20season%201%20episode%203%202020%20mp4.mp4?alt=media&token=",
      },
      {
        label: "Episode 4",
        url: "https://firebasestorage.googleapis.com/v0/b/bangden-com.appspot.com/o/upload%2FD21%20FUN%20Itaewon%20class%20itaewon%20keullasseu%20season%201%20episode%204%202020%20mp4.mp4?alt=media&token=",
      },
      {
        label: "Episode 5",
        url: "https://firebasestorage.googleapis.com/v0/b/bangden-com.appspot.com/o/upload%2FD21%20FUN%20Itaewon%20class%20itaewon%20keullasseu%20season%201%20episode%205%202020%20mp4.mp4?alt=media&token=",
      },
      {
        label: "Episode 6",
        url: "https://firebasestorage.googleapis.com/v0/b/bangden-com.appspot.com/o/upload%2FD21%20FUN%20Itaewon%20class%20itaewon%20keullasseu%20season%201%20episode%206%202020%20mp4.mp4?alt=media&token=",
      },
      {
        label: "Episode 7",
        url: "https://firebasestorage.googleapis.com/v0/b/bangden-com.appspot.com/o/upload%2FD21%20FUN%20Itaewon%20class%20itaewon%20keullasseu%20season%201%20episode%207%202020%20mp4.mp4?alt=media&token=",
      },
      {
        label: "Episode 8",
        url: "https://firebasestorage.googleapis.com/v0/b/bangden-com.appspot.com/o/upload%2FD21%20FUN%20Itaewon%20class%20itaewon%20keullasseu%20season%201%20episode%208%202020%20mp4.mp4?alt=media&token=",
      },
      {
        label: "Episode 9",
        url: "https://firebasestorage.googleapis.com/v0/b/bangden-com.appspot.com/o/upload%2FD21%20FUN%20Itaewon%20class%20itaewon%20keullasseu%20season%201%20episode%209%202020%20mp4.mp4?alt=media&token=",
      },
      {
        label: "Episode 10",
        url: "https://firebasestorage.googleapis.com/v0/b/bangden-com.appspot.com/o/upload%2FD21FUNItaewonclassitaewonkeullasseuseason1episode10_2020mp4.mp4?alt=media&token=",
      },
      {
        label: "Episode 11",
        url: "https://firebasestorage.googleapis.com/v0/b/bangden-com.appspot.com/o/upload%2FD21%20FUN%20Itaewon%20class%20itaewon%20keullasseu%20season%201%20episode%2011%202020%20mp4.mp4?alt=media&token=",
      },
      {
        label: "Episode 12",
        url: "https://firebasestorage.googleapis.com/v0/b/bangden-com.appspot.com/o/upload%2FD21%20FUN%20Itaewon%20class%20itaewon%20keullasseu%20season%201%20episode%2012%202020%20mp4.mp4?alt=media&token=",
      },
      {
        label: "Episode 13",
        url: "https://firebasestorage.googleapis.com/v0/b/bangden-com.appspot.com/o/upload%2FD21%20FUN%20Itaewon%20class%20itaewon%20keullasseu%20season%201%20episode%2013%202020%20mp4.mp4?alt=media&token=",
      },
      {
        label: "Episode 14",
        url: "https://firebasestorage.googleapis.com/v0/b/bangden-com.appspot.com/o/upload%2FD21FUNItaewonclassitaewonkeullasseuseason1episode14_2020mp4.mp4?alt=media&token=",
      },
      {
        label: "Episode 15",
        url: "https://firebasestorage.googleapis.com/v0/b/bangden-com.appspot.com/o/upload%2FD21FUNItaewonclassitaewonkeullasseuseason1episode15_2020mp4.mp4?alt=media&token=",
      },
      {
        label: "Episode 16",
        url: "https://firebasestorage.googleapis.com/v0/b/bangden-com.appspot.com/o/upload%2FD21FUNItaewonclassitaewonkeullasseuseason1episode16_2020mp4.mp4?alt=media&token=",
      },
    ],
  },
  {
    title: "The Flu (2013)",
    slug: "the-flu-2013",
    type: "Movie",
    genre: ["Romantis", "Komedi"],
    country: "Korea",
    poster:
      "https://blogger.googleusercontent.com/img/a/AVvXsEjsqZle7bjW-OIXVZ3QOjz8UbqVjoAU_HkiGcK_sITlKIH_I_SVnm82lNrg5yld8vhuBYWbj7hcioGMhx3ffWKAxvNzeqLi9ZhK_HJ2FF16FFTJvZtYscASwTXUdJOllFY_XDSI84LbANfhxpepcnfXOJvY4wL-EYRlSU0T3RewQWDvrqCN7RgqDJN1",
    image:
      "https://dkfhw9rzsr80z.cloudfront.net/TVN-ID-001-A1035/artworks/posters/TVN-ID-001-A1035-P704.jpg?hash=1604367408000",
    url: "https://firebasestorage.googleapis.com/v0/b/bangden-com.appspot.com/o/upload%2Fflu%202013%20mp4.mp4?alt=media&token=",
  },
  {
    title: "Kung Fu Hustle (2004)",
    slug: "kung-fu-hustle-2004",
    type: "Movie",
    genre: ["Action", "Komedi"],
    country: "China",
    poster: "https://image.tmdb.org/t/p/w500/exbyTbrvRUDKN2mcNEuVor4VFQW.jpg",
    image:
      "https://thumbor.prod.vidiocdn.com/8QSJxkDzeTsey3esZoaloy3VxWE=/785x440/filters:quality(70)/vidio-web-prod-video/uploads/video/image/7448477/kung-fu-hustle-d7a214.jpg",
    url: "https://firebasestorage.googleapis.com/v0/b/bangden-com.appspot.com/o/upload%2FD21%20FUN%20Kung%20fu%20hustle%202004%20mp4.mp4?alt=media&token=",
  },
  {
    title: "Shaolin Soccer (2001)",
    slug: "shaolin-soccer-2001",
    type: "Movie",
    genre: ["Action", "Komedi"],
    country: "China",
    poster: "https://image.tmdb.org/t/p/w500/kVpq68NxChzynK7otaymRSaWR8p.jpg",
    image:
      "https://about.vidio.com/wp-content/uploads/2022/07/SVOD-Shaolin-Soccer-Alt-A-Thumbnail.jpg",
    url: "https://firebasestorage.googleapis.com/v0/b/bangden-com.appspot.com/o/upload%2FD21%20FUN%20Shaolin%20soccer%202001%20mp4.mp4?alt=media&token=",
  },
];
