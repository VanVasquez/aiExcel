import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { Modal, Form } from 'react-bootstrap';
import grammarly from '../../assets/grammarly.png';
import chatgpt from '../../assets/chatgpt.png';
import deepdreams from '../../assets/deepdreams.png';
import dalle from '../../assets/dalle.png';
import artbreeder from '../../assets/artbreeder.png';
import canva from '../../assets/canva.png';
import leap from '../../assets/leap.jpg';
import freeimageai from '../../assets/freeimageai.jpg';
import grammargpt from '../../assets/grammargpt.png';
import akinator from '../../assets/akinator.jpeg';
import aidungeon from '../../assets/aidungeon.png';
import quillbot from '../../assets/quillbot.png';
import deepl from '../../assets/deepl.png';
import semanticscholar from '../../assets/semanticscholar.png';
import perplexityai from '../../assets/perplexityai.jpg';
import intellectai from '../../assets/intellectai.png';
import scite from '../../assets/scite.png';
import consensus from '../../assets/consensus.png';
import chatpdf from '../../assets/chatpdf.png';
import wolfram from '../../assets/wolfram.png';
import Tool from './tool';

const ai = [
	{
		id: 1,
		name: 'Grammarly',
		category: 'WRITING',
		link: 'https://www.grammarly.com/',
		icon: grammarly,
	},
	{
		id: 2,
		name: 'ChatGPT',
		category: 'CHATBOT',
		link: 'https://www.openai.com/',
		icon: chatgpt,
	},
	{
		id: 3,
		name: 'DeepDream',
		category: 'ART',
		link: 'https://deepdreamgenerator.com/',
		icon: deepdreams,
	},
	{
		id: 4,
		name: 'DALL-E',
		category: 'ART',
		link: 'https://openai.com/dall-e-2',
		icon: dalle,
	},
	{
		id: 5,
		name: 'Artbreeder',
		category: 'ART',
		link: 'https://www.artbreeder.com/',
		icon: artbreeder,
	},
	{
		id: 6,
		name: 'Canva',
		category: 'ART',
		link: 'https://www.canva.com/',
		icon: canva,
	},
	{
		id: 7,
		name: 'Background LOL',
		category: 'ART',
		link: 'https://www.background.lol/',
		icon: leap,
	},
	{
		id: 8,
		name: 'FreeImage AI',
		category: 'ART',
		link: 'https://www.freeimage.ai/',
		icon: freeimageai,
	},
	{
		id: 9,
		name: 'Grammar-GPT',
		category: 'GRAMMAR',
		link: 'https://www.grammar-gpt.com/',
		icon: grammargpt,
	},
	{
		id: 10,
		name: 'Akinator',
		category: 'GAMING',
		link: 'https://en.akinator.com/',
		icon: akinator,
	},
	{
		id: 11,
		name: 'AI Dungeon',
		category: 'GAMING',
		link: 'https://www.aidungeon.io/',
		icon: aidungeon,
	},
	{
		id: 12,
		name: 'QuillBot',
		category: 'PARAPHRASE',
		link: 'https://quillbot.com/',
		icon: quillbot,
	},
	{
		id: 13,
		name: 'DeepL Translator',
		category: 'TRANSLATE',
		link: 'https://www.deepl.com/translator',
		icon: deepl,
	},
	{
		id: 14,
		name: 'Semantic Scholar',
		category: 'LITERATURE',
		link: 'https://www.semanticscholar.org/',
		icon: semanticscholar,
	},
	{
		id: 15,
		name: 'Perplexity AI',
		category: 'LITERATURE',
		link: 'https://perplexity.ai/',
		icon: perplexityai,
	},
	{
		id: 16,
		name: 'Intellecs AI',
		category: 'LITERATURE',
		link: 'https://intellecs.ai/',
		icon: intellectai,
	},
	{
		id: 17,
		name: 'Scite',
		category: 'LITERATURE',
		link: 'https://scite.ai/',
		icon: scite,
	},
	{
		id: 18,
		name: 'Consensus',
		category: 'LITERATURE',
		link: 'https://consensus.app/',
		icon: consensus,
	},
	{
		id: 19,
		name: 'Chat PDF',
		category: 'LITERATURE',
		link: 'https://chat-pdf.com/',
		icon: chatpdf,
	},
	{
		id: 20,
		name: 'WolframAlpha',
		category: 'MATH',
		link: 'https://www.wolframalpha.com/',
		icon: wolfram,
	},
];

const Tools = ({ show, handleClose }) => {
	const [categories, setCategories] = useState([]);
	const [selectedCategories, setSelectedCategories] = useState(['All']);

	useEffect(() => {
		const uniqueCategories = [
			'All',
			...new Set(ai.map((tool) => tool.category)),
		];
		setCategories(uniqueCategories);
	}, []);

	const handleCategoryChange = (category) => {
		if (category === 'All') {
			setSelectedCategories(['All']);
		} else {
			if (selectedCategories.length === 1 && selectedCategories[0] === 'All') {
				setSelectedCategories([category]);
			} else {
				if (selectedCategories.includes(category)) {
					setSelectedCategories(
						selectedCategories.filter((c) => c !== category)
					);
				} else {
					setSelectedCategories([category]);
				}
			}
		}
	};

	const filteredTools = selectedCategories.includes('All')
		? ai
		: ai.filter((tool) => selectedCategories.includes(tool.category));

	console.log(filteredTools);
	return (
		<Modal show={show} onHide={handleClose}>
			<Modal.Header style={{ backgroundColor: '#1EBBD7' }}>
				<Modal.Title style={{ color: 'white', fontWeight: 800, fontSize: 32 }}>
					Search Tools
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<div className='category-container'>
					<Form>
						{categories.map((category) => (
							<Form.Check
								key={category}
								inline
								label={category}
								type='checkbox'
								id={category}
								checked={selectedCategories.includes(category)}
								onChange={() => handleCategoryChange(category)}
							/>
						))}
					</Form>
				</div>
				<Tool tools={filteredTools} />
			</Modal.Body>
		</Modal>
	);
};

Tools.propTypes = {
	show: PropTypes.bool.isRequired,
	handleClose: PropTypes.func.isRequired,
};

export default Tools;
