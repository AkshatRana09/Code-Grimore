// src/pages/DsaGrimoire.jsx
import dsaTopics from "../data/dsaTopics";

const groupByCategory = (topics) => {
  return topics.reduce((acc, topic) => {
    if (!acc[topic.category]) acc[topic.category] = [];
    acc[topic.category].push(topic);
    return acc;
  }, {});
};

const DsaGrimoire = () => {
  const groupedTopics = groupByCategory(dsaTopics);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a0a] via-[#121212] to-[#1a1a1a] text-gray-200 px-6 py-10">
      <h1 className="text-4xl font-bold text-center mb-10 tracking-widest">📜 DSA Grimoire</h1>

      {Object.entries(groupedTopics).map(([category, topics]) => (
        <div key={category} className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 border-b border-gray-600 pb-2">{category}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {topics.map((topic) => (
              <div key={topic.id} className="bg-[#1c1c1c] p-5 rounded-xl shadow-md border border-gray-700">
                <h3 className="text-xl font-bold text-teal-400">{topic.title}</h3>
                <p className="mt-2 text-sm text-gray-400">{topic.description}</p>
                <pre className="mt-4 bg-[#111111] text-green-300 p-3 rounded-lg text-sm overflow-x-auto">
                  <code>{topic.code}</code>
                </pre>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default DsaGrimoire;
