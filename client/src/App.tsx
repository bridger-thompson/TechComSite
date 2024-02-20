import { Card } from "./Card"
import { Footer } from "./Footer"
import { Section } from "./Section"

function App() {

  return (
    <>
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#">Logo</a>
      </nav>
      <div className="bg-secondary-subtle" style={{ height: "40ex" }}>Banner</div>
      <div className="container">
        <Section title="AI: What is it really?"
          text="Artificial Intelligence, or AI for short, is like teaching a computer to think, understand, and learn just like humans do. It's a special kind of computer smarts that lets machines do things we usually think only people can do, such as solving puzzles, recognizing what we say, playing games, and even making decisions. Imagine if your toys could learn to play a game better the more you played with them—that's what AI does for computers!"
          image="" />
        <Section title="How does it work?"
          text="How AI works is pretty fascinating. It starts with giving the computer lots and lots of examples or information, kind of like how you learn from seeing or doing things many times. This could be pictures, words, or numbers. Then, the computer practices by looking at all this information to find patterns or special clues that help it understand. Just like you might learn to spot a cat by its whiskers and tail, the computer learns from the details it sees. There's something called machine learning, which is a big part of AI. It's like the computer is practicing a skill, getting a little better each time, much like you improve at a video game or a sport the more you practice."
          image=""
          reverse={true} />
        <Section title="How do you use it?"
          text="Using AI can be really simple and fun. You might already be using it when you talk to voice assistants on your parents' phone, play certain video games, or watch recommendations on a streaming service. You just have to ask it a question or tell it what to do, like 'play my favorite song' or 'what's the weather today?' The AI then uses what it has learned to understand your request and help you out. It's like having a really smart robot friend that's always ready to assist you, making things easier and more fun. So, whether you're asking for homework help, wanting to know about dinosaurs, or just playing a game, AI is there to make it all more interesting."
          image="" />
        <Section title="How will it affect me?"
          text="AI is going to have a big impact on your life by making many things easier and more personalized. In your personal life, AI will make things more convenient and fun, acting like a smart assistant that can help with homework, recommend entertainment based on your likes, and even control smart devices in your home to make everyday tasks easier. AI will also help make existing jobs easier by taking over repetitive or hazardous tasks, allowing people to focus on more creative and fulfilling aspects of their work. As AI continues to evolve, it will not only change the way we work but also open up exciting new career paths that leverage human creativity and innovation."
          image=""
          reverse={true} />
        <div className="row mb-5 row-cols-4">
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
      </div>
      <Footer />
    </>
  )
}

export default App
