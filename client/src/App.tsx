import { Card } from "./Card";
import { Footer } from "./Footer";
import { Section } from "./Section";
import catUrl from "./assets/cat.webp";
import worldaiUrl from "./assets/worldai.webp";
import chatGptLogo from "./assets/ChatGPT-Logo.png";
import dalleLogo from "./assets/dalleLogo.webp";
import geminiLogo from "./assets/geminiLogo.jpg";
import copilotLogo from "./assets/copilotLogo.avif";
import openAiLogo from "./assets/openAiLogo.png";
import aiNewsLogo from "./assets/aiNewsLogo.jpg";
import aiEthicsLogo from "./assets/aiEthicsLogo.webp";
import affectMe from "./assets/affectMe.webp";
import skyneteLogo from "./assets/skynetLogo.png"
import globe from "./assets/globe.webp"
import ai from "./assets/ai.webp";
import dog from "./assets/dog.webp"

function App() {
  return (
    <>
      <nav className="navbar navbar-dark fixed-top bg-black shadow">
        <a className="navbar-brand" href="#">
          <img src={skyneteLogo} alt="logo"
            className="img-fluid rounded-4"
            width={150} />
        </a>
      </nav>
      <hr />
      <hr />
      <div
        className="bg-primary text-white mt-5 d-flex flex-column align-items-center justify-content-center"
        style={{ height: "50ex" }}
      >
        <h1 className="text-center">Welcome to the World of AI!</h1>
        <div className="row mx-0">
          <div className="col d-none d-lg-block">
            <img src={ai} alt="ai"
              className="img-fluid rounded-5"
              width={500}
            />
          </div>
          <div className="col">
            <img src={globe} alt="globe"
              className="img-fluid rounded-5"
              width={500}
            />
          </div>
          <div className="col d-none d-lg-block">
            <img src={dog} alt="dog"
              className="img-fluid rounded-5"
              width={500}
            />
          </div>
        </div>
      </div>
      <div className="container">
        <Section
          title="AI: What is it really?"
          text="Artificial Intelligence (AI) mimics human intelligence, enabling machines to learn, reason, and solve problems. It’s been around for a long time, but recently has gone through a resurgence as companies have leveraged increased computing power to discover new breakthroughs."
          image={worldaiUrl}
        />
        <Section
          title="How does it work?"
          text="It starts with giving the computer lots and lots of examples or information, this could be pictures, words, or numbers. Then, the computer practices by looking at all this information to find patterns that help it understand. Just like you might learn to spot a cat by its whiskers and tail, the computer learns from the details it sees."
          image={catUrl}
          reverse={true}
        />
        <div className="card mb-4 bg-dark text-white shadow">
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
      <section className="bg-primary text-white">
        <div className="container py-2">
          <h2 className="text-center">Using AI Tools</h2>
          <div className="row m-3 row-cols-1 row-cols-md-2 row-cols-lg-4">
            <Card image={chatGptLogo} text={"ChatGPT is an LLM developed by OpenAI, designed to generate human-like text based on the input it receives."} url="https://chat.openai.com/" />
            <Card image={dalleLogo} text={"DALL-E is an AI image generation model developed by OpenAI, capable of producing complex images."} url="https://openai.com/dall-e-2" />
            <Card image={geminiLogo} text={"Gemini is an AI chat service developed by Google, designed to provide information and insights from the web"} url="https://gemini.google.com/?utm_source=google&utm_medium=cpc&utm_campaign=2024enUS_gemfeb&gad_source=1&gclid=CjwKCAiA29auBhBxEiwAnKcSqqHbBcV7PHRbFslkimdF5WbDEo3LEQaq5mhGHYyjwb_Ix_y6iKcZXBoC7yAQAvD_BwE" />
            <Card image={copilotLogo} text={"Copilot is an AI-powered productivity tool developed by Microsoft for the Office 365 suite."} url="https://www.microsoft.com/en-us/microsoft-copilot/?ef_id=_k_CjwKCAiA29auBhBxEiwAnKcSqjgR_461S3QxXWb-OBN__15bZvvVOEC-3G6RGRJmYvF7Evd9_kqmfhoCOKYQAvD_BwE_k_&OCID=AIDcmm1o1fzy5i_SEM__k_CjwKCAiA29auBhBxEiwAnKcSqjgR_461S3QxXWb-OBN__15bZvvVOEC-3G6RGRJmYvF7Evd9_kqmfhoCOKYQAvD_BwE_k_&gad_source=1&gclid=CjwKCAiA29auBhBxEiwAnKcSqjgR_461S3QxXWb-OBN__15bZvvVOEC-3G6RGRJmYvF7Evd9_kqmfhoCOKYQAvD_BwE" />
          </div>

          <div className="row">
            <div className="col-md-6">
              <h3 className="fs-3">Choosing the Right Tool</h3>
              <h4 className="text-light">Blogging or Article Writing</h4>
              <p>
                Use AI writing assistants like ChatGPT to generate drafts,
                ideas, or even entire articles.
              </p>
              <h4 className="text-light">Graphic Design</h4>
              <p>
                Tools like DALL-E can create unique images or artwork based on
                textual descriptions.
              </p>
              <h4 className="text-light">Programming</h4>
              <p>
                Leverage AI tools like GitHub Copilot to assist with code
                suggestions, autocompletion, and documentation.
              </p>
              <h4 className="text-light">Transcribing / Voiceover</h4>
              <p>
                Use AI tools like Whisper to transcribe audio, or Elevenlabs to
                generate voiceovers from text.
              </p>
            </div>
            <div className="col-md-6">
              <h3>Prompting Effectively</h3>
              <h4 className="text-light">Be Specific</h4>
              <p>
                Instead of saying "write a story," try "write a story about a
                young detective solving a mystery in Paris in the 1920s."
              </p>
              <h4 className="text-light">Provide Context</h4>
              <p>
                If you're seeking advice or information, give the AI enough
                background. For instance, "What are healthy dinner options for
                someone with a nut allergy?"
              </p>
              <h4 className="text-light">Break Down Complex Requests</h4>
              <p>
                For complicated tasks, break them into smaller, manageable
                questions or steps. This approach can help the AI provide more
                precise and useful responses.
              </p>
              <h4 className="text-light">Iterate Based on Responses</h4>
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
            image={affectMe}
          />
          <div className="row">
            <div className="col-md-6">
              <div className="card shadow bg-dark text-white mb-4">
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
              <div className="card shadow bg-dark text-white mb-4">
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
      <section className="bg-primary text-white">
        <div className="container py-2">
          <h2 className="text-center">Staying Informed</h2>
          <p className="mx-auto">
            AI is a rapidly evolving field, and it's important to stay informed
            about the latest developments. Here are some resources to help you
            stay up to date.
          </p>
          <div className="row my-4 row-cols-1 row-cols-md-3">
            <Card image={openAiLogo} text={"Where OpenAI shares research findings, updates, and insights about their advancements in AI technology."} url="https://openai.com/blog" />
            <Card image={aiNewsLogo} text={"Stay up to date on the latest developments, breakthroughs, and trends in the field of AI."} url="https://www.artificialintelligence-news.com/" />
            <Card image={aiEthicsLogo} text={"Explore the guidelines and principles governing what is permissible in AI development and application."} url="https://www.coursera.org/articles/ai-ethics" />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default App;
