// pages/ZDNS.tsx
import { useRef } from "react";
import styles from "@/styles/Article.module.css"; // Create a separate CSS module for articles if needed
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function ZDNS() {
  const refScrollContainer = useRef(null);

  return (
    <div ref={refScrollContainer} className={styles.articleContainer}>
      {/* Navigation Link to Home */}
      <nav className="mb-8">
        <Link href="/" passHref>
          <Button variant="ghost" className="flex items-center">
            <ChevronLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>
      </nav>
      
      {/* Article Header */}
      <header className="mb-12">
        <h1 className="text-4xl font-bold text-foreground mb-4">ZDNS: A Comprehensive DNS Filtering Service</h1>
        <p className="text-muted-foreground">
          Published on <time dateTime="2024-04-27">April 27, 2024</time> by Allen
        </p>
      </header>

      {/* ZDNS Image */}
      <section className="mb-8">
        <Image 
          src="/assets/zdns.jpeg" // Replace with the correct path to your ZDNS image
          alt="ZDNS Overview" 
          width={800} 
          height={400} 
          className="my-4 rounded-md object-cover"
        />
      </section>

      {/* Article Content */}
      <article className="prose max-w-none">
        <section className="mb-8">
        <strong><h2>Introduction</h2></strong>
          <p>
            ZDNS is a Domain Name Server (DNS) Filtering Service designed to enhance cybersecurity by leveraging Threat Intelligence feeds and AI/ML techniques. This service aims to provide robust protection against malicious domains and ensure safe browsing experiences.
          </p>
        </section>

        <section className="mb-8">
        <strong><h2>Features</h2></strong>
          <ul>
            <li>Real-time threat intelligence integration</li>
            <li>AI/ML-driven anomaly detection</li>
            <li>Scalable and high-performance DNS resolution</li>
            <li>User-friendly dashboard for monitoring and management</li>
          </ul>
        </section>

        <section className="mb-8">
        <strong><h2>Technical Architecture</h2></strong>
          <p>
            The architecture of ZDNS is built to ensure scalability and reliability. It incorporates multiple layers of security and uses machine learning models to analyze and filter DNS requests effectively.
          </p>
          <Image 
            src="/assets/zdns-arch.png" 
            alt="ZDNS Architecture Diagram" 
            width={800} 
            height={400} 
            className="my-4 rounded-md object-cover"
          />
        </section>

        <section className="mb-8">
          <strong><h2>Implementation Details</h2></strong>
          <p>
            Implementing ZDNS involved several key steps, including:
          </p>
          <ol>
            <li>Integrating Threat Intelligence feeds for up-to-date threat data.</li>
            <li>Developing AI/ML models to detect and predict malicious domains.</li>
            <li>Setting up a scalable DNS resolution infrastructure.</li>
            <li>Creating a comprehensive dashboard for real-time monitoring.</li>
          </ol>
        </section>

        <section className="mb-8">
          <strong><h2>AI/ML Implementation</h2></strong>
          <p>
            User&apos;s contribution to the ZDNS project focused on the AI/ML components. This included the development of machine learning models capable of classifying DGA traffic. The models were trained using extensive datasets to recognize malicious patterns, significantly improving the accuracy of threat detection.
          </p>
          <p>
            Additionally, the implementation of a <strong>STIX/TAXII server</strong> allows for standardized threat information sharing, enhancing collaboration and responsiveness to threats. This server serves as a centralized hub for threat intelligence, facilitating automated updates and enabling the ZDNS system to respond to new threats as they emerge.
          </p>
        </section>

        <section className="mb-8">
        <strong><h2>Conclusion</h2></strong>
          <p>
            ZDNS represents a significant advancement in the field of cybersecurity, combining threat intelligence with sophisticated AI/ML techniques to provide robust DNS filtering services. As cyber threats become increasingly sophisticated, solutions like ZDNS are essential for safeguarding digital environments. The contributions made by the NetOptiq team, particularly in the AI/ML domain, underscore the importance of innovation and collaboration in developing effective cybersecurity measures.
          </p>
          <p>
            With its high accuracy rates and advanced capabilities, ZDNS stands poised to make a meaningful impact in the ongoing battle against cyber threats, ensuring a safer online experience for users and organizations alike.
          </p>
        </section>
      </article>

      {/* Footer Call-to-Action */}
      <section className="mt-16 text-center">
        <h2 className="text-2xl font-semibold mb-4">Interested in Learning More?</h2>
        <Link href="/contact" passHref>
          <Button>
            Get in Touch <ChevronLeft className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </section>
    </div>
  );
}
