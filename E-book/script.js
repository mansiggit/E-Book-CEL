// Await for the DOM to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', () => {

    // =======================
    // Modal Logic
    // =======================
    const downloadModal = document.getElementById('downloadModal');
    const downloadBtnNav = document.getElementById('downloadBtnNav');
    const downloadBtnHero = document.getElementById('downloadBtnHero');
    const closeModalBtn = document.getElementById('closeModalBtn');
    const downloadForm = document.getElementById('downloadForm');

    // Function to open the modal
    function openModal() {
        downloadModal.classList.add('active');
    }

    // Function to close the modal
    function closeModal() {
        downloadModal.classList.remove('active');
        // Reset the form fields on close
        downloadForm.reset();
    }

    // Event listeners to open the modal
    if (downloadBtnNav) {
        downloadBtnNav.addEventListener('click', openModal);
    } else {
        console.error('Download button in Navbar not found.');
    }

    if (downloadBtnHero) {
        downloadBtnHero.addEventListener('click', openModal);
    } else {
        console.error('Download button in Hero section not found.');
    }

    // Event listener to close the modal with the close button
    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', (event) => {
            // Stop propagation to prevent the click from being handled by the window listener
            event.stopPropagation();
            closeModal();
        });
    } else {
        console.error('Close modal button not found.');
    }

    // Event listener to close the modal if user clicks outside of it
    window.addEventListener('click', (event) => {
        if (event.target === downloadModal) {
            closeModal();
        }
    });

    // Handle form submission for Download Modal
    downloadForm.addEventListener('submit', (event) => {
        // Prevent the default form submission behavior
        event.preventDefault();

        // Get form data
        const fullName = document.getElementById('fullName').value;
        const email = document.getElementById('email').value;

        // In a real-world scenario, you would send this data to a backend server.
        console.log('Download Form Submitted!');
        console.log('Full Name:', fullName);
        console.log('Email:', email);
        console.log(`Thank you, ${fullName}! Your e-book will be sent to ${email} shortly.`);

        // Close the modal after a short delay
        setTimeout(closeModal, 500);
    });

    // Handle form submission for Contact Form
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            // For mailto forms, the browser handles the submission.
            // We can log the data here for demonstration.
            const name = document.getElementById('contactName').value;
            const email = document.getElementById('contactEmail').value;
            const subject = document.getElementById('contactSubject').value;
            const message = document.getElementById('contactMessage').value;

            console.log('Contact Form Submitted!');
            console.log('Name:', name);
            console.log('Email:', email);
            console.log('Subject:', subject);
            console.log('Message:', message);
            // The mailto action in HTML will handle opening the email client.
            // No need to preventDefault here if you want mailto to work.
        });
    }


    // =======================
    // Smooth Scrolling & Navbar
    // =======================
    document.querySelectorAll('.nav-link[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            // Ensure main content is visible before scrolling to a section
            if (mainContentContainer.style.display === 'none') {
                mainContentContainer.style.display = 'block';
                bookDetailPage.style.display = 'none';
                authorDetailPage.style.display = 'none';
            }

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // =======================
    // Book Carousel Logic (Hero Section)
    // =======================
    const bookTitleElement = document.getElementById('bookTitle');
    const bookAuthorElement = document.getElementById('bookAuthor');
    const bookDescriptionElement = document.getElementById('bookDescription');
    const bookCoverImageElement = document.getElementById('bookCoverImage');
    const nextBookBtn = document.getElementById('nextBookBtn');

    let currentBookIndex = 0;

    // Define the book data with unique placeholder images and detailed info
    const books = [
        {
            title: "Thinking, Fast and Slow",
            author: "Daniel Kahneman",
            description: "Discover the two systems that drive the way we think and unlock the secrets of decision-making.",
            longDescription1: "In this groundbreaking masterpiece, Daniel Kahneman, a world-renowned psychologist and winner of the Nobel Prize in Economics, takes us on a profound journey into the human mind. He meticulously explains the intricate workings of two distinct systems that govern our thoughts and decisions: System 1, which is fast, intuitive, and emotional, and System 2, which is slower, more deliberate, and logical.",
            longDescription2: "Kahneman masterfully reveals the pervasive cognitive biases that influence our judgments, often leading us astray. Through compelling research and engaging anecdotes, he provides illuminating insights into how choices are made in both our professional and personal lives. This book equips readers with practical techniques to identify and guard against common mental glitches, ultimately empowering them to make more rational and effective decisions.",
            image: "books/book.jpg", // Your provided image for the first book
            testimonialQuote: "\"A masterpiece. This is a book that every human being should read.\"",
            testimonialCite: "- Forbes",
            authorBio: "Daniel Kahneman is a towering figure in the fields of psychology and economics, renowned for his groundbreaking work on judgment and decision-making. He was awarded the Nobel Memorial Prize in Economic Sciences in 2002, alongside Amos Tversky, for their pioneering research on prospect theory. Kahneman's work has fundamentally reshaped our understanding of human rationality and the systematic errors that influence our choices. He is a distinguished professor of psychology and public affairs emeritus at Princeton University and a leading proponent of behavioral economics, a field that integrates insights from psychology into economic theory. His contributions have had a profound impact across various disciplines, from finance to public policy.",
            authorAge: "90",
            authorCareer: "Psychologist, Economist, Writer",
            authorBooksPublished: "3",
            pages: "499",
            genre: "Non-fiction, Psychology, Economics",
            subject: "Cognitive Biases, Decision Making",
            publicationDate: "October 25, 2011"
        },
        {
            title: "Supercommunicators",
            author: "Charles Duhigg",
            description: "Learn the science of great conversation and how to truly connect with anyone.",
            longDescription1: "In 'Supercommunicators,' Pulitzer Prize–winning author Charles Duhigg delves into the fascinating science behind truly effective conversations. He uncovers the underlying principles that allow some individuals to connect deeply and influence others effortlessly. Duhigg reveals that the most successful communicators instinctively understand that every exchange revolves around three core questions: What is this really about? How do we feel? And who are we?",
            longDescription2: "Through a rich tapestry of compelling stories, cutting-edge research, and practical takeaways, Duhigg demonstrates how anyone can cultivate the skills of a 'supercommunicator.' This book offers invaluable insights into improving personal relationships, advancing professional careers, and fostering more meaningful interactions in all aspects of life. It’s a transformative guide for anyone looking to master the art and science of human connection.",
            image: "books/book1.webp",
            testimonialQuote: "\"A fascinating and essential guide to understanding how we connect.\"",
            testimonialCite: "- The New York Times",
            authorBio: "Charles Duhigg is an acclaimed American journalist and author, best known for his insightful explorations of human behavior and organizational habits. A Pulitzer Prize-winning reporter for The New York Times, Duhigg has a knack for translating complex scientific concepts into engaging narratives. His previous bestsellers, 'The Power of Habit' and 'Smarter Faster Better,' have garnered widespread critical acclaim and commercial success, establishing him as a leading voice in non-fiction. Duhigg's work consistently challenges readers to rethink their routines and decision-making processes, offering actionable strategies for personal and professional improvement. He is celebrated for his meticulous research and compelling storytelling.",
            authorAge: "50",
            authorCareer: "Journalist, Author",
            authorBooksPublished: "3",
            pages: "384",
            genre: "Non-fiction, Communication",
            subject: "Interpersonal Communication, Psychology",
            publicationDate: "February 20, 2024"
        },
        {
            title: "Find Love",
            author: "Paul Brunson",
            description: "Unlock the secrets to finding lasting love and building meaningful relationships.",
            longDescription1: "Paul Brunson, the acclaimed relationship expert and television personality, shares his proven strategies for navigating the modern dating landscape and cultivating enduring love. This book is a comprehensive and practical guide, brimming with actionable advice, relatable real-life examples, and insightful exercises designed to empower readers on their journey to finding a fulfilling partnership.",
            longDescription2: "Whether you're single and searching, navigating the complexities of a new relationship, or seeking to deepen an existing bond, Brunson's wisdom offers a refreshing and optimistic perspective. He equips readers with the tools to understand themselves better, communicate effectively, and build connections that truly thrive. 'Find Love' is an essential companion for anyone committed to creating a vibrant and joyful love life.",
            image: "books/book2.webp",
            testimonialQuote: "\"Paul Brunson's advice is a game-changer for anyone serious about finding love.\"",
            testimonialCite: "- Oprah Winfrey",
            authorBio: "Paul Brunson is a highly respected relationship coach, entrepreneur, and television personality. He gained widespread recognition for his expert advice on shows like 'Married at First Sight' and 'Celebs Go Dating,' where he has helped countless individuals find love and build stronger relationships. Beyond his television appearances, Brunson is a successful entrepreneur who has built a thriving coaching business dedicated to empowering people in their romantic journeys. His approach combines practical strategies with a deep understanding of human connection, making his guidance both effective and empathetic. He is celebrated for his ability to inspire hope and provide clear, actionable steps towards relationship success.",
            authorAge: "49",
            authorCareer: "Relationship Expert, TV Personality",
            authorBooksPublished: "1",
            pages: "288",
            genre: "Self-help, Relationships",
            subject: "Dating, Love, Personal Growth",
            publicationDate: "February 14, 2023"
        },
        {
            title: "Reason to Be Happy",
            author: "Kaushik Basu",
            description: "Explore profound insights into economics, philosophy, and the pursuit of happiness.",
            longDescription1: "In 'Reason to Be Happy,' the distinguished economist Kaushik Basu embarks on a unique intellectual exploration, seamlessly blending rigorous economic theory with profound philosophical reflection and personal anecdotes. This captivating book challenges conventional wisdom by delving into what truly contributes to a happy and meaningful life, both at an individual level and within broader societal contexts.",
            longDescription2: "Basu's engaging and accessible writing style makes complex ideas digestible, inviting readers to ponder fundamental questions of existence, global justice, and individual contentment. He offers a refreshing perspective on how economic policies and societal structures can either foster or hinder human flourishing. 'Reason to Be Happy' is a thought-provoking journey that encourages readers to look beyond material wealth and consider the deeper dimensions of well-being.",
            image: "books/book3.webp",
            testimonialQuote: "\"A brilliant and thought-provoking journey into the economics of joy.\"",
            testimonialCite: "- Amartya Sen, Nobel Laureate",
            authorBio: "Kaushik Basu is an internationally acclaimed economist with a distinguished career that spans academia, government, and international organizations. He served as the Chief Economic Adviser to the Government of India and later as the Senior Vice President and Chief Economist of the World Bank. Currently, he is a Professor of Economics at Cornell University. Basu is known for his extensive research in development economics, game theory, and welfare economics. His work often bridges the gap between economic theory and practical policy, making complex concepts accessible to a wider audience. He is a prolific author, with numerous books and academic papers that have significantly influenced economic thought and policy debates globally.",
            authorAge: "72",
            authorCareer: "Economist, Professor, Author",
            authorBooksPublished: "12",
            pages: "320",
            genre: "Non-fiction, Economics, Philosophy",
            subject: "Happiness, Public Policy, Global Economy",
            publicationDate: "April 11, 2023"
        },
        {
            title: "Manifest",
            author: "Roxie Nafousi",
            description: "A guide to manifesting your dreams and creating the life you desire.",
            longDescription1: "Roxie Nafousi's 'Manifest' has quickly become a global phenomenon, serving as the definitive guide to harnessing the power of manifestation. This transformative book demystifies the concept of manifesting, breaking it down into seven clear, actionable steps that make this powerful practice accessible to everyone, regardless of their background or beliefs.",
            longDescription2: "Nafousi empowers readers to align their thoughts, feelings, and actions to consciously attract abundance, success, and profound happiness into their lives. Through practical exercises, insightful guidance, and a compassionate approach, 'Manifest' provides a roadmap for unlocking your inner potential and intentionally designing a life that truly resonates with your deepest desires and aspirations.",
            image: "books/book4.webp",
            testimonialQuote: "\"The only guide you'll ever need to unlock your full potential.\"",
            testimonialCite: "- Fearne Cotton",
            authorBio: "Roxie Nafousi is a leading voice in the self-development and manifestation space, recognized globally as a manifestation coach, author, and speaker. Her work focuses on empowering individuals to transform their lives by understanding and applying the principles of manifestation. Nafousi's authentic and relatable approach has resonated with millions, making complex spiritual concepts practical and achievable. She regularly hosts workshops, delivers motivational talks, and shares her insights across various platforms, inspiring a new generation to take control of their destinies and create the lives they envision. Her impact extends beyond her books, fostering a vibrant community dedicated to personal growth and empowerment.",
            authorAge: "33",
            authorCareer: "Manifestation Coach, Author",
            authorBooksPublished: "2",
            pages: "256",
            genre: "Self-help, Spirituality",
            subject: "Manifestation, Personal Development",
            publicationDate: "January 6, 2022"
        },
        {
            title: "We Can All Make It",
            author: "Sara Davies",
            description: "Inspiring lessons on entrepreneurship, resilience, and building a successful life.",
            longDescription1: "From the beloved Dragons' Den star Sara Davies, 'We Can All Make It' is a deeply inspiring and candid account of her remarkable journey from a kitchen table entrepreneur to building a multi-million-pound crafting empire. This book is a treasure trove of practical advice, honest insights into the highs and lows of business, and powerful motivational lessons for aspiring entrepreneurs and anyone striving to achieve their personal and professional goals.",
            longDescription2: "Davies shares her story with refreshing honesty and humor, offering a unique perspective on business and life that will motivate you to pursue your own ambitions.",
            image: "books/book5.webp",
            testimonialQuote: "\"An honest, inspiring, and incredibly useful book for anyone with a dream.\"",
            testimonialCite: "- Deborah Meaden",
            authorBio: "Sara Davies is a highly successful British entrepreneur, television personality, and the visionary founder of Crafter's Companion. She is widely recognized for her role as an investor on the popular BBC show 'Dragons' Den,' where her sharp business acumen and down-to-earth approach have made her a fan favorite. Davies started her business from her university bedroom, building it into a global enterprise. Her journey is a true rags-to-riches story, characterized by innovation, resilience, and a deep understanding of her market. She is an inspiring figure for aspiring business owners and a testament to the power of hard work and strategic thinking.",
            authorAge: "40",
            authorCareer: "Entrepreneur, TV Personality",
            authorBooksPublished: "1",
            pages: "272",
            genre: "Biography, Business, Self-help",
            subject: "Entrepreneurship, Resilience",
            publicationDate: "April 28, 2022"
        },
        {
            title: "You Coach You",
            author: "Helen Tupper and Sarah Ellis",
            description: "Empower yourself with practical coaching tools to navigate your career and life.",
            longDescription1: "From the award-winning hosts of the immensely popular 'Squiggly Careers' podcast, Helen Tupper and Sarah Ellis present 'You Coach You,' a revolutionary guide designed to empower individuals with practical coaching tools to navigate the complexities of their careers and lives. This book is a comprehensive toolkit, packed with actionable techniques and insightful exercises that enable readers to take proactive control of their professional development.",
            longDescription2: "Their unique and accessible approach helps you identify your strengths, navigate career transitions, and build unwavering confidence, and strategically navigate career transitions. 'You Coach You' is more than just a book; it's a personal development companion that provides the framework and encouragement needed to build a fulfilling and impactful professional path on your own terms, fostering continuous growth and resilience.",
            image: "books/book6.webp",
            testimonialQuote: "\"An insightful guide, filled with actionable advice to empower leaders.\"",
            testimonialCite: "- Richard Branson",
            authorBio: "Helen Tupper and Sarah Ellis are the dynamic duo behind Amazing If, a company dedicated to helping people have more fulfilling and 'squiggly' careers. They are the highly successful hosts of the 'Squiggly Careers' podcast, which has become a go-to resource for career development advice globally. Both are experienced business leaders with backgrounds in various industries, bringing a wealth of practical knowledge and strategic insight to their work. They advocate for a non-linear approach to career progression, emphasizing continuous learning, adaptability, and personal agency. Their collaborative work empowers individuals to design careers that align with their values and aspirations, making them influential voices in modern professional development.",
            authorAge: "40s",
            authorCareer: "Career Experts, Authors, Podcasters",
            authorBooksPublished: "2",
            pages: "304",
            genre: "Self-help, Career Development",
            subject: "Coaching, Personal Growth",
            publicationDate: "January 20, 2022"
        },
        {
            title: "The Diary of A CEO",
            author: "Steven Bartlett",
            description: "Unfiltered insights and lessons from the journey of a modern entrepreneur.",
            longDescription1: "Based on the hugely successful and globally recognized podcast, 'The Diary of A CEO' by Steven Bartlett offers an unprecedented and unfiltered look into the minds of some of the world's most influential entrepreneurs, leaders, and thinkers. This compelling book distills key lessons on entrepreneurship, leadership, and personal growth, drawing from Bartlett's own remarkable journey and his candid conversations with industry titans.",
            longDescription2: "Bartlett's raw honesty and ability to extract profound insights from his guests make this book an invaluable resource for anyone aspiring to build a business, lead effectively, or simply live a more impactful life. It's a powerful blend of personal narrative, actionable advice, and inspiring stories that challenges conventional wisdom and encourages readers to carve their own path to success.",
            image: "books/book7.webp",
            testimonialQuote: "\"A must-read for anyone looking to build a business or a better life.\"",
            testimonialCite: "- Simon Sinek",
            authorBio: "Steven Bartlett is a highly influential entrepreneur, speaker, investor, and the visionary host of 'The Diary of a CEO' podcast, which has rapidly become one of the most listened-to podcasts worldwide. Starting his first business from his bedroom at a young age, Bartlett quickly rose to prominence as the co-founder of Social Chain, a leading social media marketing agency. His entrepreneurial journey is marked by audacious ambition, innovative thinking, and a commitment to transparency. Beyond his business ventures, Bartlett is a compelling speaker and investor, actively supporting new ventures and sharing his insights on modern leadership, mental health, and personal development. He is a prominent voice for a new generation of entrepreneurs.",
            authorAge: "31",
            authorCareer: "Entrepreneur, Podcaster, Investor, Speaker",
            authorBooksPublished: "1",
            pages: "352",
            genre: "Non-fiction, Business, Self-help",
            subject: "Entrepreneurship, Leadership, Personal Growth",
            publicationDate: "August 17, 2023"
        }
    ];

    // Get elements for the book detail page
    const mainContentContainer = document.getElementById('mainContentContainer');
    const bookDetailPage = document.getElementById('bookDetailPage');
    const backToHomeBtn = document.getElementById('backToHomeBtn');

    const detailBookTitle = document.getElementById('detailBookTitle');
    const detailBookAuthor = document.getElementById('detailBookAuthor');
    const detailBookCover = document.getElementById('detailBookCover');
    const detailBookLongDescription1 = document.getElementById('detailBookLongDescription1');
    const detailBookLongDescription2 = document.getElementById('detailBookLongDescription2');
    const detailTestimonialQuote = document.getElementById('detailTestimonialQuote');
    const detailTestimonialCite = document.getElementById('detailTestimonialCite');
    // const detailAuthorBio = document.getElementById('detailAuthorBio'); // This is now on the author detail page
    const learnMoreAuthorBtn = document.getElementById('learnMoreAuthorBtn');

    // New elements for book meta details
    const detailBookPages = document.getElementById('detailBookPages');
    const detailBookGenre = document.getElementById('detailBookGenre');
    const detailBookSubject = document.getElementById('detailBookSubject');
    const detailBookPublicationDate = document.getElementById('detailBookPublicationDate');

    // Get elements for the author detail page
    const authorDetailPage = document.getElementById('authorDetailPage');
    const backToBookDetailBtn = document.getElementById('backToBookDetailBtn');
    const authorDetailName = document.getElementById('authorDetailName');
    const authorDetailAge = document.getElementById('authorDetailAge');
    const authorDetailCareer = document.getElementById('authorDetailCareer');
    const authorDetailBooksPublished = document.getElementById('authorDetailBooksPublished');
    const authorDetailBio = document.getElementById('authorDetailBio'); // Get the new element for author bio


    // Function to update the displayed book content in the hero section
    function updateBookDisplay() {
        const book = books[currentBookIndex];
        if (bookTitleElement) bookTitleElement.textContent = book.title;
        if (bookAuthorElement) bookAuthorElement.textContent = book.author;
        if (bookDescriptionElement) bookDescriptionElement.textContent = book.description;
        if (bookCoverImageElement) {
            bookCoverImageElement.src = book.image;
            bookCoverImageElement.alt = `Book Cover: ${book.title} by ${book.author}`;
        }
    }

    // Function to show the book detail page
    function showBookDetails(book) {
        if (mainContentContainer) mainContentContainer.style.display = 'none';
        if (authorDetailPage) authorDetailPage.style.display = 'none'; // Ensure author page is hidden
        if (bookDetailPage) bookDetailPage.style.display = 'block';

        // Populate the detail page
        if (detailBookTitle) detailBookTitle.textContent = book.title;
        if (detailBookAuthor) detailBookAuthor.textContent = book.author;
        if (detailBookCover) {
            detailBookCover.src = book.image;
            detailBookCover.alt = `Book Cover: ${book.title} by ${book.author}`;
        }
        if (detailBookLongDescription1) detailBookLongDescription1.textContent = book.longDescription1;
        if (detailBookLongDescription2) detailBookLongDescription2.textContent = book.longDescription2;
        if (detailTestimonialQuote) detailTestimonialQuote.textContent = book.testimonialQuote;
        if (detailTestimonialCite) detailTestimonialCite.textContent = book.testimonialCite;
        // if (detailAuthorBio) detailAuthorBio.textContent = book.authorBio; // Removed from here


        // Populate new book meta details
        if (detailBookPages) detailBookPages.textContent = book.pages || 'N/A';
        if (detailBookGenre) detailBookGenre.textContent = book.genre || 'N/A';
        if (detailBookSubject) detailBookSubject.textContent = book.subject || 'N/A';
        if (detailBookPublicationDate) detailBookPublicationDate.textContent = book.publicationDate || 'N/A';


        // Scroll to the top of the detail page
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Function to show the author detail page
    function showAuthorDetails(book) {
        if (mainContentContainer) mainContentContainer.style.display = 'none';
        if (bookDetailPage) bookDetailPage.style.display = 'none'; // Ensure book detail page is hidden
        if (authorDetailPage) authorDetailPage.style.display = 'block';

        // Populate author details
        if (authorDetailName) authorDetailName.textContent = book.author;
        if (authorDetailAge) authorDetailAge.textContent = book.authorAge || 'N/A';
        if (authorDetailCareer) authorDetailCareer.textContent = book.authorCareer || 'N/A';
        if (authorDetailBooksPublished) authorDetailBooksPublished.textContent = book.authorBooksPublished || 'N/A';
        if (authorDetailBio) authorDetailBio.textContent = book.authorBio; // Populated here


        // Scroll to the top of the author detail page
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }


    // Event listener for the next book button in hero section
    if (nextBookBtn) {
        nextBookBtn.addEventListener('click', () => {
            currentBookIndex = (currentBookIndex + 1) % books.length;
            updateBookDisplay();
        });
    } else {
        console.error('Next book button not found.');
    }

    // Event listener for clicking the book cover in the hero section to show details
    if (bookCoverImageElement) {
        bookCoverImageElement.addEventListener('click', () => {
            showBookDetails(books[currentBookIndex]);
        });
    }

    // Event listener for the "Back to Home" button on the book detail page
    if (backToHomeBtn) {
        backToHomeBtn.addEventListener('click', () => {
            if (bookDetailPage) bookDetailPage.style.display = 'none';
            if (mainContentContainer) mainContentContainer.style.display = 'block';
            // Scroll back to the top of the main content
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // Event listener for the "Learn More" button on the book detail page
    if (learnMoreAuthorBtn) {
        learnMoreAuthorBtn.addEventListener('click', () => {
            showAuthorDetails(books[currentBookIndex]);
        });
    }

    // Event listener for the "Back to Book Details" button on the author detail page
    if (backToBookDetailBtn) {
        backToBookDetailBtn.addEventListener('click', () => {
            showBookDetails(books[currentBookIndex]); // Go back to the book detail page
        });
    }


    // Initialize the display with the first book
    updateBookDisplay();

    // =======================
    // Content Fade-in on Scroll
    // =======================
    const sections = document.querySelectorAll('.section');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const animatedContent = entry.target.querySelector('.animated-content');
                if (animatedContent) {
                    animatedContent.classList.add('is-visible');
                }
            } else {
                const animatedContent = entry.target.querySelector('.animated-content');
                if (animatedContent) {
                    animatedContent.classList.remove('is-visible');
                }
            }
        });
    }, {
        threshold: 0.5
    });

    // Observe each section
    sections.forEach(section => {
        observer.observe(section);
    });
});
