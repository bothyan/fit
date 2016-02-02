
                import React from 'react'
                import CodeView from '../../../../components/code-view'
                import Highlight from 'react-highlight'
                import { ScrollListenBox, ScrollListenNail , ScrollListen, createStore } from 'fit-scroll-listen'
                import { Row, Col } from 'fit-layout'
                import CodeDoc from '../../../../components/code-doc'
                import { Layout, Header, Section, Sidebar } from 'fit-layout-global'
                import Title from '../../../../components/title'
                import readme from '../../../../lib/pc/datepicker/readme.md'
                import '../../../../lib/pc/datepicker/demo'

                const store = createStore()

                
                        import CalendarSource from '../../../../lib/pc/datepicker/src/calendar'
                        import CalendarSourceCode from 'text!../../../../lib/pc/datepicker/src/calendar'
                        
                        import DateRangeSource from '../../../../lib/pc/datepicker/src/date-range'
                        import DateRangeSourceCode from 'text!../../../../lib/pc/datepicker/src/date-range'
                        
                        import DateInputSource from '../../../../lib/pc/datepicker/src/date-input'
                        import DateInputSourceCode from 'text!../../../../lib/pc/datepicker/src/date-input'
                        

                
                    import BasicComponent from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!../../../../lib/pc/datepicker/demo/lists/basic.js'
                    import BasicCode from 'text!../../../../lib/pc/datepicker/demo/lists/basic.js'
                    import BasicMarkdown from '../../../../lib/pc/datepicker/demo/lists/basic.md'
                    
                    import RangeComponent from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!../../../../lib/pc/datepicker/demo/lists/range.js'
                    import RangeCode from 'text!../../../../lib/pc/datepicker/demo/lists/range.js'
                    import RangeMarkdown from '../../../../lib/pc/datepicker/demo/lists/range.md'
                    
                    import ToolbarComponent from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!../../../../lib/pc/datepicker/demo/lists/toolbar.js'
                    import ToolbarCode from 'text!../../../../lib/pc/datepicker/demo/lists/toolbar.js'
                    import ToolbarMarkdown from '../../../../lib/pc/datepicker/demo/lists/toolbar.md'
                    
                    import InputComponent from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!../../../../lib/pc/datepicker/demo/lists/input.js'
                    import InputCode from 'text!../../../../lib/pc/datepicker/demo/lists/input.js'
                    import InputMarkdown from '../../../../lib/pc/datepicker/demo/lists/input.md'
                    
                    import LabelComponent from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!../../../../lib/pc/datepicker/demo/lists/label.js'
                    import LabelCode from 'text!../../../../lib/pc/datepicker/demo/lists/label.js'
                    import LabelMarkdown from '../../../../lib/pc/datepicker/demo/lists/label.md'
                    
                    import ShowTimeComponent from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!../../../../lib/pc/datepicker/demo/lists/show-time.js'
                    import ShowTimeCode from 'text!../../../../lib/pc/datepicker/demo/lists/show-time.js'
                    import ShowTimeMarkdown from '../../../../lib/pc/datepicker/demo/lists/show-time.md'
                    

                const colStyle = {
                    padding: 10
                }

                const docStyle = {
                    margin: 10,
                    background: 'white'
                }

                export default class DemoBox extends React.Component {
                    constructor(props) {
                        super(props)
                        this.state = {
                            page: 'demo'
                        }
                        document.title = '日期选择器'
                    }

                    handlePageChange(value) {
                        this.setState({
                            page: value
                        })
                    }

                    render() {
                        let Content = null

                        switch (this.state.page) {
                        case 'demo':
                            Content = (
                                <Row>
                                    
                        <Col span="24" style={colStyle}>
                            <CodeView store={store}
                                      md={BasicMarkdown}
                                      code={BasicCode}>

                                    <BasicComponent/>

                            </CodeView>
                        </Col>
                    
                        <Col span="24" style={colStyle}>
                            <CodeView store={store}
                                      md={RangeMarkdown}
                                      code={RangeCode}>

                                    <RangeComponent/>

                            </CodeView>
                        </Col>
                    
                        <Col span="24" style={colStyle}>
                            <CodeView store={store}
                                      md={ToolbarMarkdown}
                                      code={ToolbarCode}>

                                    <ToolbarComponent/>

                            </CodeView>
                        </Col>
                    
                        <Col span="24" style={colStyle}>
                            <CodeView store={store}
                                      md={InputMarkdown}
                                      code={InputCode}>

                                    <InputComponent/>

                            </CodeView>
                        </Col>
                    
                        <Col span="24" style={colStyle}>
                            <CodeView store={store}
                                      md={LabelMarkdown}
                                      code={LabelCode}>

                                    <LabelComponent/>

                            </CodeView>
                        </Col>
                    
                        <Col span="24" style={colStyle}>
                            <CodeView store={store}
                                      md={ShowTimeMarkdown}
                                      code={ShowTimeCode}>

                                    <ShowTimeComponent/>

                            </CodeView>
                        </Col>
                    
                                </Row>
                            )
                            break
                        case 'document':
                            Content = (
                                <div>
                                    
                        <div style={docStyle}>
                            <CodeDoc code={CalendarSourceCode} instance={CalendarSource} />
                        </div>
                        
                        <div style={docStyle}>
                            <CodeDoc code={DateRangeSourceCode} instance={DateRangeSource} />
                        </div>
                        
                        <div style={docStyle}>
                            <CodeDoc code={DateInputSourceCode} instance={DateInputSource} />
                        </div>
                        
                                </div>
                            )
                            break
                        }

                        return (
                            <div className="_namespace">
                                <Layout>
                                    <Header>
                                        <Title gitlabUrl="http://gitlab.baidu.com/tb-component/pc-datepicker/tree/master"
                                               onChange={this.handlePageChange.bind(this)}>{readme}</Title>
                                    </Header>

                                    <Section>
                                        <ScrollListenBox store={store}>
                                            {Content}
                                        </ScrollListenBox>
                                    </Section>
                                    <Sidebar direction="right"
                                             width="120">
                                        <ScrollListen store={store}/>
                                    </Sidebar>
                                </Layout>
                            </div>
                        )
                    }
                }
                