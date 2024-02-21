import { Card } from "./Card";
import { Footer } from "./Footer";
import { Section } from "./Section";

function App() {
  return (
    <>
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
          Logo
        </a>
      </nav>
      <div
        className="bg-secondary-subtle d-flex flex-column align-items-center justify-content-center"
        style={{ height: "40ex" }}
      >
        <h1 className="text-center">Welcome to the World of AI!</h1>
      </div>
      <div className="container">
        <Section
          title="AI: What is it really?"
          text="Artificial Intelligence (AI) mimics human intelligence, enabling machines to learn, reason, and solve problems. It’s been around for a long time, but recently has gone through a resurgence as companies have leveraged increased computing power to discover new breakthroughs."
          image=""
        />
        <Section
          title="How does it work?"
          text="It starts with giving the computer lots and lots of examples or information, this could be pictures, words, or numbers. Then, the computer practices by looking at all this information to find patterns that help it understand. Just like you might learn to spot a cat by its whiskers and tail, the computer learns from the details it sees."
          image=""
          reverse={true}
        />
        <div className="card mb-4 bg-secondary-subtle shadow-sm">
          <div className="card-body">
            <div className="card-title fs-3">Key Terms Explained</div>
            <p>
              <strong>Large Language Models (LLMs)</strong>: AI systems
              trained on vast text datasets to understand, model, and
              generate human-like language.
            </p>
            <p>
              <strong>Generative AI (GAI)</strong>: AI capable of creating
              new content, such as images, text, or music.
            </p>
            <p>
              <strong>Machine Learning (ML)</strong>: A subset of AI where
              machines learn from data over time.
            </p>
            <p>
              <strong>Neural Networks</strong>: Computing systems inspired
              by biological neural networks.
            </p>
          </div>
        </div>
      </div>
      <section className="bg-primary-subtle">
        <div className="container py-2">
          <h2 className="text-center">Using AI Tools</h2>
          <div className="row m-4 row-cols-4">
            <div className="px-1">
              <Card image={""} text={"ChatGPT"} />
            </div>
            <div className="px-1">
              <Card image={""} text={"Dalle"} />
            </div>
            <div className="px-1">
              <Card image={""} text={"Gemini"} />
            </div>
            <div className="px-1">
              <Card image={""} text={"Copilot"} />
            </div>
          </div>
          <p className="mx-auto fs-5">
            Using AI can be really simple and fun. You might already be using it
            when you talk to voice assistants on your parents' phone, play
            certain video games, or watch recommendations on a streaming
            service. Here are some tips to make AI tools work for you:
          </p>

          <div className="row">
            <div className="col-md-6">
              <h3 className="fs-3">Choosing the Right Tool</h3>
              <p>Identify your need to select an appropriate AI application.</p>
              <h4 className="text-muted">Blogging or Article Writing</h4>
              <p>
                Use AI writing assistants like ChatGPT to generate drafts,
                ideas, or even entire articles.
              </p>
              <h4 className="text-muted">Graphic Design</h4>
              <p>
                Tools like DALL-E can create unique images or artwork based on
                textual descriptions.
              </p>
              <h4 className="text-muted">Programming</h4>
              <p>
                Leverage AI tools like GitHub Copilot to assist with code
                suggestions, autocompletion, and documentation.
              </p>
              <h4 className="text-muted">Transcribing / Voiceover</h4>
              <p>
                Use AI tools like Whisper to transcribe audio, or Elevenlabs to
                generate voiceovers from text.
              </p>
            </div>
            <div className="col-md-6">
              <h3>Prompting Effectively</h3>
              <h4 className="text-muted">Be Specific</h4>
              <p>
                Instead of saying "write a story," try "write a story about a
                young detective solving a mystery in Paris in the 1920s."
              </p>
              <h4 className="text-muted">Provide Context</h4>
              <p>
                If you're seeking advice or information, give the AI enough
                background. For instance, "What are healthy dinner options for
                someone with a nut allergy?"
              </p>
              <h4 className="text-muted">Break Down Complex Requests</h4>
              <p>
                For complicated tasks, break them into smaller, manageable
                questions or steps. This approach can help the AI provide more
                precise and useful responses.
              </p>
              <h4 className="text-muted">Iterate Based on Responses</h4>
              <p>
                Use the AI's responses to refine your prompts. If the first
                answer isn't quite right, tweak your question based on the
                information provided and ask again.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="">
        <div className="container py-2">
          <h2 className="text-center">The Future of AI</h2>
          <Section
            title="How will it affect me?"
            text="AI is going to have a big impact on your life by making many things easier and more personalized. In your personal life, AI will make things more convenient and fun, acting like a smart assistant that can help with homework, recommend entertainment based on your likes, and even control smart devices in your home to make everyday tasks easier. AI will also help make existing jobs easier by taking over repetitive or hazardous tasks, allowing people to focus on more creative and fulfilling aspects of their work. As AI continues to evolve, it will not only change the way we work but also open up exciting new career paths that leverage human creativity and innovation."
            image=""
          />
          <div className="row">
            <div className="col-md-6">
              <div className="card shadow-sm bg-secondary-subtle mb-4">
                <div className="card-body">
                  <div className="card-title fs-3">Emerging Trends</div>
                  <p>
                    <strong>Healthcare</strong>: AI will help doctors diagnose
                    diseases more accurately and quickly, and even assist in
                    surgeries.
                  </p>
                  <p>
                    <strong>Education</strong>: AI will personalize learning
                    experiences, making education more accessible and effective.
                  </p>
                  <p>
                    <strong>Entertainment</strong>: AI will create personalized
                    content, such as movies, music, and games.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card shadow-sm bg-secondary-subtle mb-4">
                <div className="card-body">
                  <div className="card-title fs-3">Societal Impacts</div>
                  <p>
                    <strong>Job Displacement</strong>: AI will automate many
                    tasks, leading to job displacement in some industries.
                  </p>
                  <p>
                    <strong>Privacy Concerns</strong>: AI will collect and
                    analyze large amounts of data, raising privacy concerns.
                  </p>
                  <p>
                    <strong>Bias</strong>: AI systems can inherit biases from
                    their training data, leading to unfair decisions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-primary-subtle">
        <div className="container py-2">
          <h2 className="text-center">Staying Informed</h2>
          <p className="mx-auto">
            AI is a rapidly evolving field, and it's important to stay informed
            about the latest developments. Here are some resources to help you
            stay up to date.
          </p>
          <div className="row my-4 row-cols-3">
            <div className="px-1">
              <Card image={""} text={"OpenAI Blog"} />
            </div>
            <div className="px-1">
              <Card image={""} text={"AI News"} />
            </div>
            <div className="px-1">
              <Card image={""} text={"AI Ethics"} />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default App;
