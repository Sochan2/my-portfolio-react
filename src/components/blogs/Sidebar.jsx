export default function Sidebar() {
  return (
    <div className="bg-white p-4 shadow rounded">
      <h2 className="font-semibold text-lg mb-3">Recommended Articles</h2>
      <ul className="space-y-2 text-sm">
        <li><a href="/blog/react-hooks" className="text-blue-600 hover:underline">React Hooks Basics</a></li>
        <li><a href="/blog/vite-intro" className="text-blue-600 hover:underline">Vite Intro</a></li>
      </ul>

      <div className="mt-6">
        <h2 className="font-semibold text-lg mb-3">Tags</h2>
        <div className="flex flex-wrap gap-2 text-sm">
          <span className="bg-gray-200 px-2 py-1 rounded">React</span>
          <span className="bg-gray-200 px-2 py-1 rounded">Hooks</span>
        </div>
      </div>
    </div>
  );
}
