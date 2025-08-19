// src/components/FeaturesOverview.tsx


import LLM from '../icons/llm';
import Time from '../icons/Time';
import VectorEmbedding from '../icons/VectorEmbedding';
import VectorSearch from '../icons/VectorSearch';
import FeatureStrip from './FeatureStrip';


const features = [
  {
    icon: <LLM />,
    title: 'LLM Prompt',
    description: 'Send optimized legal prompts to local or cloud LLMs.',
  },
  {
    icon: <VectorEmbedding />,
    title: 'Vector Embeddings',
    description: 'Extract facts and convert into vector representations.',
  },
  {
    icon: <VectorSearch />,
    title: 'Vector Search',
    description: 'Query by context, not just keywords. Get smarter results.',
  },
  {
    icon: <Time />,
    title: 'Timeline Output',
    description: 'Generate chronological legal timelines with sources.',
  },
];

const FeaturesOverview = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
        {features.map((feat, idx) => (
          <FeatureStrip
            key={idx}
            icon={feat.icon}
            title={feat.title}
            description={feat.description}
          />
        ))}
      </div>
    </section>
  );
};

export default FeaturesOverview;