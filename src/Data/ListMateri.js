import Accommodator from './../Assets/Gambar/Accomodator.jpeg';
import Diverger from './../Assets/Gambar/Diverger.jpeg';
import Assimilator from './../Assets/Gambar/Assimilator.jpeg';
import Converger from './../Assets/Gambar/Converger.jpeg';

const LIST_MATERI = [
  {
    no: 1,
    title: 'Accommodator',
    keterangan:
      'Seorang individu dengan gaya accomadtor memiliki kemampuan untuk belajar terutama dari pengalaman "langsung".',
    img: Accommodator,
    url: '/daftar-materi?id_gaya_belajar=1',
  },
  {
    no: 2,
    title: 'Diverger',
    keterangan:
      'Individu dengan gaya diverger paling baik dalam melihat situasi konkret dari berbagai sudut pandang.',
    img: Diverger,
    url: '/daftar-materi?id_gaya_belajar=2',
  },
  {
    no: 3,
    title: 'Assimilator',
    keterangan:
      'Seorang individu dengan gaya asimilator paling baik dalam memahami berbagai informasi dan memasukkan ke dalam bentuk yang ringkas dan logis.',
    img: Assimilator,
    url: '/daftar-materi?id_gaya_belajar=3',
  },
  {
    no: 4,
    title: 'Converger',
    keterangan:
      'Seorang individu dengan gaya converger memiliki kemampuan untuk memecahkan masalah dan membuat keputusan.',
    img: Converger,
    url: '/daftar-materi?id_gaya_belajar=4',
  },
];

export default LIST_MATERI;
