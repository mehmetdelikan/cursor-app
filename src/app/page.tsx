import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
            Hoş Geldiniz
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Modern ve Hızlı Web Uygulaması
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              Hızlı
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Next.js ile yüksek performanslı web uygulamaları geliştirin.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              Modern
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              En son web teknolojileri ile modern uygulamalar oluşturun.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              Güvenli
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Güvenli ve ölçeklenebilir çözümler sunun.
            </p>
          </div>
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/mehmetdelikan/cursor-app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors"
          >
            GitHub&apos;da İncele
          </a>
        </div>
      </main>
    </div>
  );
}
