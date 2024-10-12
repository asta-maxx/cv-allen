// pages/ZDNS.tsx

import { useEffect, useRef } from "react";
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
        <h1 className="text-4xl font-bold text-foreground mb-4">ZDNS: A DNS Filtering Service Utilizing AI/ML Techniques</h1>
        <p className="text-muted-foreground">
          Published on <time dateTime="2024-04-27">April 27, 2024</time> by Allen
        </p>
      </header>
      <Image 
            src="/assets/ZDNS.jpeg" 
            alt="ZDNS Architecture Diagram" 
            width={800} 
            height={400} 
            className="my-4 rounded-md object-cover"
          />
      {/* Article Content */}
      <article className="prose max-w-none text-justify">
        <section className="mb-8">
          <h2>Introduction</h2>
          <p>
            In an era where cyber threats are constantly evolving, the need for advanced security solutions is more pressing than ever. The team at NetOptiq, in collaboration with the Karunya Institute of Technology and Sciences, has developed <strong>ZDNS</strong>—a sophisticated Domain Name Server (DNS) Filtering Service that leverages Threat Intelligence feeds and AI/ML techniques. This article delves into the features, architecture, and impact of ZDNS, highlighting its significance in the realm of cybersecurity.
          </p>
        </section>

        <section className="mb-8">
          <h1><strong>Overview of ZDNS</strong></h1>
          <p>
            ZDNS is designed to enhance DNS security by employing advanced analytics to identify and filter malicious domain requests. By integrating threat intelligence with artificial intelligence and machine learning algorithms, ZDNS can effectively classify and block harmful traffic, ensuring safer browsing experiences for users and organizations.
          </p>
        </section>

        <section className="mb-8">
          <h2>Key Features</h2>
          <ul>
            <li><strong>Threat Intelligence Integration</strong>: ZDNS utilizes comprehensive threat intelligence feeds to stay ahead of emerging threats. This allows the system to dynamically adapt and respond to new types of attacks, providing a proactive defense mechanism.</li>
            <li><strong>AI/ML Techniques</strong>:
              <ul>
                <li><strong>DGA Classification</strong>: One of the standout features of ZDNS is its ability to classify Domain Generation Algorithms (DGAs) using machine learning models. 
                  <ul>
                    <li><strong>Model Performance</strong>:
                      <ul>
                        <li><strong>Naive Bayes</strong>: Achieving an impressive accuracy of <strong>99.65%</strong>.</li>
                        <li><strong>distBERT</strong>: Offering a competitive accuracy of <strong>99.4%</strong>.</li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>These high accuracy rates signify the robustness of ZDNS in detecting and mitigating threats that utilize DGAs to generate malicious domains.</li>
              </ul>
            </li>
            <li><strong>Backend Capabilities</strong>:
              <ul>
                <li><strong>PCAP Analysis</strong>: ZDNS can analyze packet capture (PCAP) files to identify suspicious patterns and behaviors in network traffic.</li>
                <li><strong>Zeek Analysis</strong>: Integration with Zeek (formerly known as Bro), a powerful network analysis framework, enhances ZDNS's capability to monitor and log network activity, contributing to threat detection.</li>
                <li><strong>Log Parsing</strong>: The system effectively parses logs to extract relevant data for analysis, enabling real-time insights into network behavior.</li>
                <li><strong>Regex Blocking</strong>: ZDNS employs regular expression (regex) blocking to filter out known bad domains, allowing for granular control over DNS queries.</li>
              </ul>
            </li>
            <li><strong>Frontend Visualization</strong>:
              <ul>
                <li><strong>Grafana</strong>: The frontend is powered by Grafana, which provides a user-friendly interface for monitoring and visualizing DNS traffic. This visualization helps security teams quickly identify trends and anomalies in real-time.</li>
              </ul>
            </li>
            <li><strong>Unbound Integration</strong>: ZDNS seamlessly integrates with Unbound, a validating, recursive, and caching DNS resolver, to enhance DNS query resolution while maintaining high security standards.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2>AI/ML Implementation</h2>
          <p>
            User's contribution to the ZDNS project focused on the AI/ML components. This included the development of machine learning models capable of classifying DGA traffic. The models were trained using extensive datasets to recognize malicious patterns, significantly improving the accuracy of threat detection.
          </p>
          <p>
            Additionally, the implementation of a <strong>STIX/TAXII server</strong> allows for standardized threat information sharing, enhancing collaboration and responsiveness to threats. This server serves as a centralized hub for threat intelligence, facilitating automated updates and enabling the ZDNS system to respond to new threats as they emerge.
          </p>
        </section>

        <section className="mb-8">
          <h2>Conclusion</h2>
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
