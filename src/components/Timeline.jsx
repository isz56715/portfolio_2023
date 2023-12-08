import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const Timeline = () => {
  return (
    <section id="timeline">
      <div className="port__inner">
        <div className="port__title">
          TimeLine <em>경력 사항</em>
        </div>

        <VerticalTimeline>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2014"
    iconStyle={{ background: '#afa395'}}
  >
    <p>
    군산동원중학교 졸업
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    iconStyle={{ background: '#afa395'}}
    date="2017"
  >
    <p>
    군산제일고등학교 졸업
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    iconStyle={{ background: '#afa395'}}
    date="2022"
  >
    <p>
    컴퓨터 활용능력 1급 취득<br/>
    SQLD 취득<br/>
    VNTG 현장실습 인턴
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    iconStyle={{ background: '#afa395'}}
    date="2023"
  >
    <p>
    정보처리기사 필기 합격<br/>
    동계종합학술발표회 참가<br/>
    하계종합학술발표회 참가<br/>
    싱가포르  · 말레이시아 해외연수<br/>
    전라북도 공공데이터 활용 창업경진대회 참가<br/>
    국립군산대학교 졸업 예정
    </p>
  </VerticalTimelineElement>
</VerticalTimeline>
      </div>
    </section>
  );
}

export default Timeline;