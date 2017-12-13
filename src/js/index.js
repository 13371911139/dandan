import React from 'react'
import $ from 'jquery'
require('../css/index.css')
export default class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {canGo:true,value:0};
        this.scrollFunc=this.scrollFunc.bind(this);
        this.moves=this.moves.bind(this)
    }
    scrollFunc(e){
        e=e || window.event;
        e.preventDefault();e.stopPropagation();
        if(!this.state.canGo)return false;
        if(e.wheelDelta){//IE/Opera/Chrome
            return this.moves(e,e.wheelDelta)
            console.log(e.wheelDelta,'whell')
        }else if(e.detail){//Firefox
            this.moves(e,e.detail)
            console.log(e.detail,'detail')
        }
    }
    moves(e,d){
        if(d>0){
            var value=this.state.value-1;
            this.setState({value:value < 0?0:value,canGo:false},()=>{
                $(document).scrollTop($(window).height()*this.state.value)
                setTimeout(()=>{
                    this.setState({canGo:true})
                },1000)
            })
            return false;
        }else{
            var value=this.state.value+1;
            this.setState({value:value > 2?2:value,canGo:false},()=>{
                $(document).scrollTop($(window).height()*this.state.value);
                setTimeout(()=>{
                    this.setState({canGo:true})
                },1000)
            })
            return false;
        }
    }
    componentDidMount(){
        if (!window.applicationCache) {
            alert("页面中使用较多css3，建议您更新您的浏览器后观看");
        }
        $(document).scrollTop($(window).height()*this.state.value);
        window.onmousewheel=document.onmousewheel=this.scrollFunc;
        if(document.addEventListener){
            document.addEventListener('DOMMouseScroll',this.scrollFunc,false);
        }
        $(window).resize(()=>{
            $(document).scrollTop($(window).height()*this.state.value);
        })
    }
    render() {
        return (
            <div>
                <div className="okFrom" >
                    <img className="title" src="https://img.alicdn.com/imgextra/i3/909783760/TB2eGw0b6gy_uJjSZK9XXXvlFXa_!!909783760.png" alt=""/>
                    <img className="leftBottom" src="https://img.alicdn.com/imgextra/i3/909783760/TB2DY0CignH8KJjSspcXXb3QFXa_!!909783760.png" alt=""/>
                </div>
                <div className="cddInfo">
                    <div className="left">
                        <ul>
                            <li className="first">
                                <h4>崔丹丹</h4>
                                <p><span>892132283@qq.com</span><span>|</span><span>13641672237</span></p>
                            </li>
                            <li>
                                <h4>基础信息</h4>
                                <p>
                                    <span>居住地</span>
                                    <span>上海市浦东新区博兴路799弄</span>
                                </p>
                            </li>
                            <li>
                                <h4>教育背景</h4>
                                <p>
                                    <span>院校</span>
                                    <span>安徽文达信息工程学院</span>
                                </p>
                                <p>
                                    <span>学历</span>
                                    <span>本科</span>
                                </p>
                                <p>
                                    <span>专业</span>
                                    <span>艺术设计</span>
                                </p>
                            </li>
                            <li>
                                <h4>技能展示</h4>
                                <div>
                                    <span>ps</span>
                                    <span>ps</span>
                                    <span>ps</span>
                                    <span>ps</span>
                                    <span>ps</span>
                                </div>
                            </li>
                            <li>
                                <h4>自我介绍</h4>
                                <p>
                                    性格好，心态好，容易相处，逻辑能力强，接受适当的加班，能积极解决问题，望可以融入贵公司！
                                </p>
                            </li>
                        </ul>
                    </div>
                    <div className="right">
                        <h4>工作经历</h4>
                        <ul>
                            <li className="first">
                                <div className="lefts">
                                    <span className="time">2013.10-2014.4</span>
                                    <span className="name">豆果美食</span>
                                    <span className="type">UI设计师助理</span>
                                </div>
                                <div className="rights">
                                    <p>
                                        工作职责：<br/>
                                        与主设计师一起参与产品讨论，对产品的结构、
                                        功能、实用性等方面提出意见；<br/>
                                        参与部分页面设计工作，提出不适当操作流程
                                        输出最终视觉稿；<br/>
                                        协助前端人员制作静态页面；<br/>
                                        检测线上产品视觉效果，优化用户体验。
                                    </p>
                                </div>
                            </li>
                            <li className="first">
                                <div className="lefts">
                                    <span className="time">2013.10-2014.4</span>
                                    <span className="name">豆果美食</span>
                                    <span className="type">UI设计师助理</span>
                                </div>
                                <div className="rights">
                                    <p>
                                        工作职责：<br/>
                                        与主设计师一起参与产品讨论，对产品的结构、
                                        功能、实用性等方面提出意见；<br/>
                                        参与部分页面设计工作，提出不适当操作流程
                                        输出最终视觉稿；<br/>
                                        协助前端人员制作静态页面；<br/>
                                        检测线上产品视觉效果，优化用户体验。
                                    </p>
                                </div>
                            </li>
                            <li className="first">
                                <div className="lefts">
                                    <span className="time">2013.10-2014.4</span>
                                    <span className="name">豆果美食</span>
                                    <span className="type">UI设计师助理</span>
                                </div>
                                <div className="rights">
                                    <p>
                                        工作职责：<br/>
                                        与主设计师一起参与产品讨论，对产品的结构、
                                        功能、实用性等方面提出意见；<br/>
                                        参与部分页面设计工作，提出不适当操作流程
                                        输出最终视觉稿；<br/>
                                        协助前端人员制作静态页面；<br/>
                                        检测线上产品视觉效果，优化用户体验。
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="container">
                    <div className="mulu">
                        <img src="https://img.alicdn.com/imgextra/i3/909783760/TB2izMXfOqAXuNjy1XdXXaYcVXa_!!909783760.png" alt=""/>
                    </div>
                    <div className="bottomList">
                        <span></span>
                        <span></span>
                        <span></span>
                        <b className="buttons">去看作品</b>
                    </div>
                </div>
            </div>
        )
    }
}