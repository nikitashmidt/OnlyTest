import CountUp from "react-countup";
import { useState } from "react";
import { v4 as uuid } from "uuid";
import cn from "classnames";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import arrow from "/arrow.svg";
import arrowSlide from "/arrowSlide.svg";
import arrowSlideMobile from "/arrowMobile.svg";

import "swiper/css/navigation";
import "swiper/css";

import "./App.scss"

const db = [
  {
    endDate: 2022,
    startDate: 2017,
    events: [
      {
        date:  2017,
        description: "13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды"
      },
      {
        date: 2020,
        description: "13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды"
      },
      {
        date: 2021,
        description: "13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды"
      },
      {
        date: 2022,
        description: "13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды"
      },
    ]
  },
  {
    endDate: 2017,
    startDate: 2012,
    events: [
      {
        date: 2012,
        description: "13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды"
      },
      {
        date: 2015,
        description: "13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды"
      },
      {
        date: 2016,
        description: "13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды"
      },
      {
        date: 2017,
        description: "13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды"
      },
    ]
  },
  {
    endDate: 2004,
    startDate: 1999,
    events: [
      {
        date: 1999,
        description: "13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды"
      },
      {
        date: 2000,
        description: "13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды"
      },
      {
        date: 2001,
        description: "13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды"
      },
      {
        date: 2002,
        description: "13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды"
      },
    ]
  },
  {
    endDate: 1996,
    startDate: 1991,
    events: [
      {
        date: 1991,
        description: "13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды"
      },
      {
        date: 1992,
        description: "13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды"
      },
      {
        date: 1993,
        description: "13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды"
      },
      {
        date: 1994,
        description: "13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды"
      },
    ]
  },
  {
    endDate: 1991,
    startDate: 1986,
    events: [
      {
        date: 1986,
        description: "13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды"
      },
      {
        date: 1987,
        description: "13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды"
      },
      {
        date: 1988,
        description: "13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды"
      },
      {
        date: 1989,
        description: "13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды"
      },
    ]
  },
  {
    endDate: 1986,
    startDate: 1981,
    events: [
      {
        date: 1981,
        description: "13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды"
      },
      {
        date: 1982,
        description: "13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды"
      },
      {
        date: 1983,
        description: "13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды"
      },
      {
        date: 1986,
        description: "13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды"
      },
    ]
  }
]

const dbInfo = [
  {
    info: "Кино"
  },
  {
    info: "Литература"
  },
  {
    info: "История"
  },
  {
    info: "Искусство"
  },
  {
    info: "Наука"
  },
  {
    info: "Космос"
  },
]

function App() {
  const [dateNumber, setDateNumber] = useState<number>(0);
  const [activeNumber, setActiveNumber] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [currentDate, setCurrentDate] = useState<number[]>([db[0].endDate, db[0].startDate]);
  const [previousDate, setPreviousDate] = useState<number[]>([db[dateNumber].endDate, db[dateNumber].startDate]);
  
  const changeEvents = (index: number) => {
    setIsLoading(true);

    function changeCurrentDate(index: number) {
      
      if (index === 0 || dateNumber > index) {
        setPreviousDate([db[dateNumber].endDate, db[dateNumber].startDate])
      } else if (index === db.length - 1) {
        setPreviousDate([db[dateNumber].endDate, db[dateNumber].startDate])
      } else {
        setPreviousDate([db[index - 1].endDate, db[index - 1].startDate])
      }

      setTimeout(() => {
        setCurrentDate([db[index].endDate, db[index].startDate]);
      }, 50);
    }

    if (index === -1) {
      setDateNumber(db.length - 1);
  
      setActiveNumber(db.length - 1);

       setTimeout(() => {
        setIsLoading(false);
       }, 1000)
      
      changeCurrentDate(db.length - 1);

      return "";
    }

    if (index === db.length) {
      setDateNumber(0);
      setActiveNumber(0);

      setTimeout(() => {
        setIsLoading(false);
      }, 1000);

      changeCurrentDate(0);

      return "";
    }

    setDateNumber(index);
    setActiveNumber(index);

    setTimeout(() => {
      setIsLoading(false);
    }, 1000)

    changeCurrentDate(index);
  }

  return (
    <section className="section">
      <h1 className="title"> Исторические даты </h1>

      <div className="date">
        <div className="date-left"> <CountUp separator="" start={previousDate[1]} end={currentDate[1]} /> </div>
        <div className="date-right"><CountUp separator="" start={previousDate[0]} end={currentDate[0]} /></div>
      </div>

      <div className="circles" style={{transform: `translate(50%, -50%) rotate(-${dateNumber * 60 }deg)`}}>
        {dbInfo.map((item, index) => {
          return (
            <div key={uuid()} className={cn("circle", dateNumber === index && "active", activeNumber === index && "activeSpan")} style={{transform: `translate(50%, -50%) rotate(${dateNumber * 60}deg)`}}  onClick={() => changeEvents(index)}>
              <span className={cn(isLoading && "hidden")} >  {item.info} </span> 
            </div>
          )
        })}
      </div>

      <div className="slider">
        <div className="slider-top">
          <div className="slider-count">0{ dateNumber + 1}/0{ db.length }</div>
          <div className="slider-btns">
            <button className="slider-btn slider-prev" disabled={dateNumber === 0 || isLoading} onClick={() => changeEvents(dateNumber - 1)}>
              <img src={arrow} alt="arrow" />
              <img src={arrowSlideMobile} alt="arrow" />
            </button>
            <button className="slider-btn slider-next" disabled={dateNumber === db.length - 1 || isLoading} onClick={() => changeEvents(dateNumber + 1)}>
              <img src={arrow} alt="arrow" />
              <img src={arrowSlideMobile} alt="arrow" />
            </button>
          </div>
         
        </div>
         <div className={cn("slider-pagination", isLoading && "slider-pagination--hidden")}>
            {db.map((_, index) => {
              return (
                <button type="button" name="button" className={cn("slider-pagination-circle", dateNumber === index && "slider-pagination-circleActive")} onClick={() => changeEvents(index)} />
              )
            })}
          </div>

        <div className={cn("slider-bottom", isLoading && "slider-bottom--hidden")}>
           <Swiper
            modules={[Navigation]}
            spaceBetween={25}
            slidesPerView={2}
            navigation={{
              nextEl: ".slider-button-next",
              prevEl: ".slider-button-prev"
            }}
            scrollbar={{ draggable: true }}
            className="slider-list"
            breakpoints={{
              992:{
                slidesPerView: 3,
                spaceBetween: 50,
              }
            }}
          > 
            {db.filter(item => item.endDate === currentDate[0]).map(({events}) => {
              return (
                <div key={uuid()}>
                  {events.map(item => {
                    return (
                      <SwiperSlide className="slider-item" key={uuid()}>
                        <div className="slider-date">{item.date} </div>
                        <p className="slider-descr">
                          {item.description}
                        </p>
                      </SwiperSlide>
                    )
                  })}
                </div>
              )
            })}
          </Swiper>
          <button className="slider-button-next">
            <img src={arrowSlide} alt="arrow" />
          </button>
          <button className="slider-button-prev">
            <img src={arrowSlide} alt="arrow" />
          </button>
        </div>
      </div>
    </section>
  )
}

export default App
