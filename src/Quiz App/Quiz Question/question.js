import React from 'react';
import Rating from 'react-rating';
import { Progress } from 'reactstrap';



class QuizQuestion extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            checkArrayIndex: 1,
            quizData: [],
            showRating: 0,
            correct: false,
            incorrect: false,
            totalPerc: 100,
            markInPerc: 0

        }
    }

    componentWillMount() {
        let data = [
            {
                "category": "Entertainment%3A%20Video%20Games",
                "type": "multiple",
                "difficulty": "hard",
                "question": "What%20was%20the%20name%20of%20the%20hero%20in%20the%2080s%20animated%20video%20game%20%27Dragon%27s%20Lair%27%3F",
                "correct_answer": "Dirk%20the%20Daring",
                "incorrect_answers": [
                    "Arthur",
                    "Sir%20Toby%20Belch",
                    "Guy%20of%20Gisbourne"
                ]
            },
            {
                "category": "Animals",
                "type": "multiple",
                "difficulty": "easy",
                "question": "What%20is%20the%20scientific%20name%20for%20modern%20day%20humans%3F",
                "correct_answer": "Homo%20Sapiens",
                "incorrect_answers": [
                    "Homo%20Ergaster",
                    "Homo%20Erectus",
                    "Homo%20Neanderthalensis"
                ]
            },
            {
                "category": "Entertainment%3A%20Books",
                "type": "multiple",
                "difficulty": "hard",
                "question": "What%20is%20Ron%20Weasley%27s%20middle%20name%3F",
                "correct_answer": "Bilius",
                "incorrect_answers": ["Arthur", "John", "Dominic"]
            },
            {
                "category": "Entertainment%3A%20Comics",
                "type": "multiple",
                "difficulty": "easy",
                "question": "Who%20is%20the%20creator%20of%20the%20comic%20series%20%22The%20Walking%20Dead%22%3F",
                "correct_answer": "Robert%20Kirkman",
                "incorrect_answers": [
                    "Stan%20Lee",
                    "Malcolm%20Wheeler-Nicholson",
                    "Robert%20Crumb"
                ]
            },
            {
                "category": "Entertainment%3A%20Board%20Games",
                "type": "multiple",
                "difficulty": "medium",
                "question": "At%20the%20start%20of%20a%20standard%20game%20of%20the%20Monopoly%2C%20if%20you%20throw%20a%20double%20six%2C%20which%20square%20would%20you%20land%20on%3F",
                "correct_answer": "Electric%20Company",
                "incorrect_answers": ["Water%20Works", "Chance", "Community%20Chest"]
            },
            {
                "category": "Geography",
                "type": "multiple",
                "difficulty": "easy",
                "question": "What%20is%20the%20capital%20of%20Jamaica%3F",
                "correct_answer": "Kingston",
                "incorrect_answers": ["Rio%20de%20Janeiro", "Dar%20es%20Salaam", "Kano"]
            },
            {
                "category": "History",
                "type": "multiple",
                "difficulty": "medium",
                "question": "When%20did%20Jamaica%20recieve%20its%20independence%20from%20England%3F%20",
                "correct_answer": "1962",
                "incorrect_answers": ["1492", "1963", "1987"]
            },
            {
                "category": "Animals",
                "type": "boolean",
                "difficulty": "easy",
                "question": "Kangaroos%20keep%20food%20in%20their%20pouches%20next%20to%20their%20children.",
                "correct_answer": "False",
                "incorrect_answers": ["True"]
            },
            {
                "category": "General%20Knowledge",
                "type": "multiple",
                "difficulty": "medium",
                "question": "In%202013%20how%20much%20money%20was%20lost%20by%20Nigerian%20scams%3F",
                "correct_answer": "%2412.7%20Billion",
                "incorrect_answers": [
                    "%2495%20Million",
                    "%24956%20Million",
                    "%242.7%20Billion"
                ]
            },
            {
                "category": "History",
                "type": "multiple",
                "difficulty": "medium",
                "question": "How%20old%20was%20Lyndon%20B.%20Johnson%20when%20he%20assumed%20the%20role%20of%20President%20of%20the%20United%20States%3F",
                "correct_answer": "55",
                "incorrect_answers": ["50", "60", "54"]
            },
            {
                "category": "Entertainment%3A%20Video%20Games",
                "type": "multiple",
                "difficulty": "hard",
                "question": "In%20World%20of%20Warcraft%20lore%2C%20who%20organized%20the%20creation%20of%20the%20Paladins%3F",
                "correct_answer": "Alonsus%20Faol",
                "incorrect_answers": [
                    "Uther%20the%20Lightbringer",
                    "Alexandros%20Mograine",
                    "Sargeras%2C%20The%20Daemon%20Lord"
                ]
            },
            {
                "category": "Entertainment%3A%20Video%20Games",
                "type": "boolean",
                "difficulty": "medium",
                "question": "In%20the%20game%20%22Subnautica%22%2C%20a%20%22Cave%20Crawler%22%20will%20attack%20you.",
                "correct_answer": "True",
                "incorrect_answers": ["False"]
            },
            {
                "category": "Entertainment%3A%20Japanese%20Anime%20%26%20Manga",
                "type": "multiple",
                "difficulty": "medium",
                "question": "What%20is%20the%20name%20of%20the%20device%20that%20allows%20for%20infinite%20energy%20in%20the%20anime%20%22Dimension%20W%22%3F",
                "correct_answer": "Coils",
                "incorrect_answers": ["Wires", "Collectors", "Tesla"]
            },
            {
                "category": "Entertainment%3A%20Video%20Games",
                "type": "multiple",
                "difficulty": "medium",
                "question": "What%20is%20the%20name%20of%20Cream%20the%20Rabbit%27s%20mom%20in%20the%20%22Sonic%20the%20Hedgehog%22%20series%3F",
                "correct_answer": "Vanilla",
                "incorrect_answers": ["Peach", "Strawberry", "Mint"]
            },
            {
                "category": "History",
                "type": "multiple",
                "difficulty": "easy",
                "question": "These%20two%20countries%20held%20a%20commonwealth%20from%20the%2016th%20to%2018th%20century.",
                "correct_answer": "Poland%20and%20Lithuania",
                "incorrect_answers": [
                    "Hutu%20and%20Rwanda",
                    "North%20Korea%20and%20South%20Korea",
                    "Bangladesh%20and%20Bhutan"
                ]
            },
            {
                "category": "Entertainment%3A%20Television",
                "type": "multiple",
                "difficulty": "hard",
                "question": "Which%20of%20these%20voices%20wasn%27t%20a%20choice%20for%20the%20House%20AI%20in%20%22The%20Simpsons%20Treehouse%20of%20Horror%22%20short%2C%20House%20of%20Whacks%3F",
                "correct_answer": "George%20Clooney",
                "incorrect_answers": [
                    "Matthew%20Perry",
                    "Dennis%20Miller",
                    "Pierce%20Brosnan"
                ]
            },
            {
                "category": "Entertainment%3A%20Music",
                "type": "multiple",
                "difficulty": "medium",
                "question": "From%20which%20album%20is%20the%20Gorillaz%20song%2C%20%22On%20Melancholy%20Hill%22%20featured%20in%3F",
                "correct_answer": "Plastic%20Beach",
                "incorrect_answers": ["Demon%20Days", "Humanz", "The%20Fall"]
            },
            {
                "category": "General%20Knowledge",
                "type": "boolean",
                "difficulty": "easy",
                "question": "Scotland%20voted%20to%20become%20an%20independent%20country%20during%20the%20referendum%20from%20September%202014.",
                "correct_answer": "False",
                "incorrect_answers": ["True"]
            },
            {
                "category": "Entertainment%3A%20Video%20Games",
                "type": "multiple",
                "difficulty": "medium",
                "question": "In%20Left%204%20Dead%2C%20which%20campaign%20has%20the%20protagonists%20going%20through%20a%20subway%20in%20order%20to%20reach%20a%20hospital%20for%20evacuation%3F",
                "correct_answer": "No%20Mercy",
                "incorrect_answers": [
                    "Subway%20Sprint",
                    "Hospital%20Havoc",
                    "Blood%20Harvest"
                ]
            },
            {
                "category": "History",
                "type": "multiple",
                "difficulty": "hard",
                "question": "What%20was%20the%20last%20colony%20the%20UK%20ceded%20marking%20the%20end%20of%20the%20British%20Empire%3F",
                "correct_answer": "Hong%20Kong",
                "incorrect_answers": ["India", "Australia", "Ireland"]
            }
        ]

        this.setState({
            quizData: data
        })
    }

    ChangeQuestion = () => {
        const { checkArrayIndex } = this.state;
        if (checkArrayIndex < this.state.quizData.length) {
            this.setState({
                checkArrayIndex: checkArrayIndex + 1,
                correct: false,
                incorrect: false
            })
        }
        else {
            alert('no more question')
        }
    }

    checkAnswer = (option) => {
        console.log('option', option);
        const { markInPerc } = this.state;
        this.state.quizData.map((data, index) => {
            if (this.state.checkArrayIndex === index + 1) {
                if (option == data.correct_answer) {
                    console.log('correct')
                    let calculatePerc = 0;
                    calculatePerc = calculatePerc + (this.state.totalPerc / this.state.quizData.length);
                    console.log('perc', calculatePerc);
                    this.setState({
                        correct: true,
                        markInPerc: markInPerc + calculatePerc
                    }, () => {
                        console.log('parc', this.state.markInPerc)
                    })
                }
                else {
                    console.log('incorrect')

                    this.setState({
                        incorrect: true
                    })
                }
            }

        })

    }

    showQuestion = () => {

        return (
            <div>
                {this.state.quizData.map((data, index) => {
                    if (this.state.checkArrayIndex === index + 1) {
                        console.log(data);
                        let showRating;
                        if (data.difficulty === 'easy') {

                            showRating = 1;

                        }
                        else if (data.difficulty === 'medium') {
                            showRating = 2;
                        }
                        else if (data.difficulty === 'hard') {
                            showRating = 3;
                        }


                        return (
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', overflowX: 'hidden' }}>
                                <div style={{ borderRadius: '5px', border: '5px solid #e3e3e3', boxShadow: '1px 5px 2px #0000', width: '800px' }} key={index}>
                                    <h1 style={{ textAlign: 'center' }}>{`Question ${this.state.checkArrayIndex} of ${this.state.quizData.length}`}</h1>
                                    <p style={{ textAlign: 'center', fontSize: '12px' }}>{data.category}</p>
                                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                                        <Rating style={{ fontSize: '12px' }} initialRating={showRating} />
                                    </div>
                                    <div style={{ display: 'felx', justifyContent: 'center', paddingLeft: '100px' }}>
                                        <p style={{ wordBreak: 'break-all', fontSize: '14px', textAlign: 'center', font: 'bold', color: ' black', width: '400px' }}>{data.question}</p>
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                                        <button disabled={this.state.correct || this.state.incorrect ? true : false} onClick={() => this.checkAnswer(data.correct_answer, index)} style={{ cursor: 'pointer', borderRadius: '5px', borderColor: 'black', padding: '5px' }}>{data.correct_answer}</button>
                                        {data.incorrect_answers.map((data1, index) => {
                                            return (
                                                <div >
                                                    <button disabled={this.state.correct || this.state.incorrect ? true : false} onClick={() => this.checkAnswer(data1)} style={{ cursor: 'pointer', borderRadius: '5px', borderColor: 'black', padding: '5px' }}>{data1}</button>
                                                    <br />
                                                </div>
                                            )
                                        })}


                                    </div>
                                    <div style={{ height: '50px' }}></div>

                                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                                        {this.state.correct ? <p style={{ color: 'blue',fontSize:'25px' }}>Correct!</p> : ''}
                                        {this.state.incorrect ? <p style={{ color: 'red',fontSize:'25px' }}>InCorrect!</p> : ''}
                                    </div>
                                    <div style={{ height: '80px' }}></div>
                                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                                        <button onClick={this.ChangeQuestion} style={{ cursor: 'pointer', borderRadius: '5px', borderColor: 'black', padding: '5px', padding: '10px' }}>next Qs</button>
                                    </div>
                                    <div style={{ height: '100px' }}></div>
                                    <div  >
                                    <div style={{textAlign:'center'}} >{`${this.state.markInPerc}%`}</div>
                                    <Progress color="success" value={`${this.state.markInPerc}`} />
                                    </div>
                                </div>
                            </div>
                        )
                    }
                })}

            </div>

        )
    }

    render() {
        console.log(this.state.quizData);
        return (
            <div>
                {this.showQuestion()}
            </div>
        )
    }
}

export default QuizQuestion;