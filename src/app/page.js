// Red: #D13F3F
// White: #FFFDE7
// Dark Grey: #42403C
'use client';
import Navbar from '../components/Navbar';
import ContentView from '../components/ContentView';
import Socials from '../components/Socials';
import Project from '../components/Project';
import Resume from '../components/Resume';
import React from 'react';

export default function Home() {
	const [visible, setVisible] = React.useState("about-me");
  	return (
		<html lang="en">
			<head>
				<meta name="description" content="Nathan Papa's Personal Website" />
				<title>Nathan Papa's Personal Website</title>
			</head>
			<body>
				<div className="flex px-48 h-screen flex-col items-center justify-between">
					<Navbar />
					<Socials />
				</div>
			</body>
		</html>
  	);
}
