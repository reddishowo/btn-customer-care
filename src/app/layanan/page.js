// app/layanan/page.js
'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar';

export default function LayananPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const faqItems = [
    {
      title: "Lupa ID Pengguna Bale By BTN",
      content: (
        <ol className="list-decimal list-inside space-y-3">
          <li>Pada halaman login Klik tombol <strong>&quot;Lupa ID Pengguna&quot;</strong></li>
          <li>Isi kolom Lupa ID Pengguna yang terdiri dari Nomor Kartu ATM, Nomor Telepon, Tanggal Lahir, Masa Berlaku Kartu ATM, dan CVV</li>
          <li>Klik tombol <strong>&quot;Lanjut&quot;</strong></li>
          <li>Setelah klik Lanjut pada halaman Syarat & Ketentuan, user diarahkan ke halaman SMS Verifikasi</li>
          <li>Masukkan kode OTP yang diterima dari nomor telepon terdaftar</li>
          <li>Setelah Verifikasi OTP berhasil, lanjutkan proses dengan klik tombol <strong>&quot;Buat ID Pengguna & Kata Sandi&quot;</strong></li>
          <li>Buat ID Pengguna & Kata Sandi baru</li>
        </ol>
      )
    },
    {
      title: "Lupa Kata Sandi Bale by BTN",
      content: (
        <ol className="list-decimal list-inside space-y-3">
          <li>Klik Tombol <strong>&quot;Lupa Kata Sandi&quot;</strong></li>
          <li>Isi kolom Lupa Kata Sandi dengan data yang diperlukan</li>
          <li>Klik tombol <strong>&quot;Lanjut&quot;</strong></li>
          <li>Ikuti proses verifikasi SMS</li>
          <li>Masukkan kode OTP</li>
          <li>Buat kata sandi baru</li>
        </ol>
      )
    },
    {
      title: "Cardless Withdrawal atau Penarikan Tanpa Kartu",
      content: (
        <div className="space-y-6">
          <div>
            <h4 className="font-semibold text-lg mb-3">Pada Aplikasi balé by BTN</h4>
            <ol className="list-decimal list-inside space-y-2">
              <li>Pilih menu tanpa kartu</li>
              <li>Pilih menu buat kode</li>
              <li>Pilih sumber dana</li>
              <li>Masukkan nominal</li>
              <li>Ikuti instruksi selanjutnya</li>
            </ol>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-3">Pada ATM</h4>
            <ol className="list-decimal list-inside space-y-2">
              <li>Pilih menu balé by BTN Withdrawal</li>
              <li>Masukkan no HP terdaftar</li>
              <li>Input Kode Token</li>
              <li>Ambil uang dan resi transaksi</li>
            </ol>
          </div>
        </div>
      )
    },
    {
      title: "Layanan Pemblokiran Kartu ATM",
      content: (
        <div>
          <p className="font-medium text-lg mb-4">Langkah Blokir Kartu ATM melalui balé by BTN:</p>
          <ol className="list-decimal list-inside space-y-2">
            <li>Buka aplikasi balé by BTN kemudian pilih tombol <strong>&quot;Masuk&quot;</strong></li>
            <li>Silakan mengisi ID Pengguna dan Kata Sandi lalu klik <strong>&quot;Masuk&quot;</strong></li>
            <li>Pilih ikon <strong>&quot;Pengaturan&quot;</strong></li>
            <li>Pilih menu <strong>&quot;Layanan Kartu ATM&quot;</strong></li>
            <li>Akan tertampil nomor rekening dan nomor kartu ATM yang terhubung dengan aplikasi balé by BTN</li>
            <li>Pilih nomor rekening dan nomor kartu ATM yang akan dilakukan pemblokiran</li>
            <li>Pilih <strong>&quot;Blokir Kartu ATM&quot;</strong></li>
            <li>Isi alasan pemblokiran, unggah dokumen opsional, dan centang persetujuan</li>
            <li>Pilih <strong>&quot;Blokir&quot;</strong></li>
            <li>Masukkan 6 digit MPIN</li>
            <li>Blokir kartu ATM telah berhasil</li>
          </ol>
        </div>
      )
    }
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <div className="relative pt-20 pb-32 flex content-center items-center justify-center min-h-[500px]">
        <div className="absolute top-0 w-full h-full bg-center bg-cover opacity-20">
          <Image
            src="/img/test1.jpg"
            alt="Background"
            fill
            priority
            className="object-cover"
          />
        </div>
        <div className="container relative mx-auto">
          <div className="w-full lg:w-6/12 px-4 mx-auto text-center">
            <h1 className="text-4xl font-semibold text-blue-600 mb-4">
              Sahabat Keluarga Indonesia
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              PT Bank Tabungan Negara (Persero) Tbk. berkomitmen melayani dan menyediakan tiga produk utama: perbankan perseorangan, bisnis, dan syariah
            </p>
          </div>
        </div>
      </div>

      {/* Breadcrumb */}
      <nav className="flex px-4 py-3 bg-white shadow-sm rounded-lg mx-4">
        <ol className="flex items-center space-x-1 text-sm">
          <li>
            <Link href="/" className="text-gray-500 hover:text-gray-700">
              Beranda
            </Link>
          </li>
          <li><span className="text-gray-400 mx-2">/</span></li>
          <li className="text-blue-600">Layanan Nasabah</li>
        </ol>
      </nav>

      {/* FAQ Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-12">
          Frequently Asked Questions
        </h2>
        
        <div className="space-y-4">
          {faqItems.map((faq, index) => (
            <div 
              key={index} 
              className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <button
                onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                className="w-full flex justify-between items-center p-4 bg-blue-600 bg-opacity-80 hover:bg-opacity-100 text-white transition-all duration-300"
              >
                <span className="text-lg font-medium">{faq.title}</span>
                <svg
                  className={`w-6 h-6 transform transition-transform duration-300 ${
                    openFaqIndex === index ? 'rotate-45' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6" 
                  />
                </svg>
              </button>
              <div 
                className={`bg-white p-6 transition-all duration-300 ${
                  openFaqIndex === index ? 'block' : 'hidden'
                }`}
              >
                {faq.content}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}