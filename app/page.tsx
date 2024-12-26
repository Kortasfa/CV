export default function CV() {
  return (
    <div className="min-h-screen p-8 pb-20 font-sans flex flex-col items-center">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold">Тимофеев Захар</h1>
        <p className="text-lg">React-разработчик</p>
        <p className="text-sm text-gray-600">+7 (927) 6696169 | timofzahar@yandex.ru | @nesterfas</p>
        <p className="text-sm">Йошкар-Ола, Россия | Готов к переезду и командировкам</p>
      </header>

      <section className="mb-12 w-full max-w-4xl">
        <h2 className="text-2xl font-semibold mb-4">Опыт работы</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-medium">React разработчик</h3>
            <p className="text-sm text-gray-500">iSpring | Сентябрь 2023 - настоящее время (1 год 4 месяца)</p>
            <ul className="list-disc pl-5 mt-2">
              <li>Разработка ПО с использованием React и Redux Toolkit</li>
              <li>Работа с внутренней ДС и HyperHTML в монорепозитории</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-medium">React Native разработчик</h3>
            <p className="text-sm text-gray-500">iSpring | Январь 2024 - Август 2024 (8 месяцев)</p>
            <ul className="list-disc pl-5 mt-2">
              <li>Разработка приложения с использованием Expo и KittenUI</li>
              <li>Проект зарелижен в Rustore</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-medium">Верстальщик сайтов</h3>
            <p className="text-sm text-gray-500">iSpring | Октябрь 2022 - Август 2023 (11 месяцев)</p>
            <ul className="list-disc pl-5 mt-2">
              <li>Верстка сайтов на HTML, CSS и JavaScript</li>
              <li>Работа с легаси кодом и конструкторами сайтов (Tilda)</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-12 w-full max-w-4xl">
        <h2 className="text-2xl font-semibold mb-4">Образование</h2>
        <p>Поволжский государственный технологический университет (2026)</p>
        <p>ФИиВТ, Программная инженерия</p>
      </section>

      <section className="mb-12 w-full max-w-4xl">
        <h2 className="text-2xl font-semibold mb-4">Навыки</h2>
        <p>JavaScript, HTML, Git, TypeScript, React Native, Redux, Next.js, SQL, PostgreSQL, REST API, ООП, Expo</p>
      </section>

      <section className="w-full max-w-4xl">
        <h2 className="text-2xl font-semibold mb-4">Обо мне</h2>
        <p>Имею разговорный английский (B2). Люблю изучать новые фреймворки, сейчас разбираюсь с Next.js.</p>
      </section>

      <footer className="mt-20 text-center text-sm text-gray-500">
        <p>Обновлено 12 декабря 2024</p>
      </footer>
    </div>
  );
}
