
                import React from 'react'
                import CodeView from '../../../../components/code-view'
                import Highlight from 'react-highlight'
                import { ScrollListenBox, ScrollListenNail , ScrollListen, createStore } from 'fit-scroll-listen'
                import { Row, Col } from 'fit-layout'
                import CodeDoc from '../../../../components/code-doc'
                import { Layout, Header, Section, Sidebar } from 'fit-layout-global'
                import Title from '../../../../components/title'
                import readme from '../../../../lib/mobile/reset/readme.md'
                import '../../../../lib/mobile/reset/demo'

                const store = createStore()

                

                
                    import BasicComponent from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!../../../../lib/mobile/reset/demo/lists/basic.js'
                    import BasicCode from 'text!../../../../lib/mobile/reset/demo/lists/basic.js'
                    import BasicMarkdown from '../../../../lib/mobile/reset/demo/lists/basic.md'
                    

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
                        document.title = '样式重置'
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
                    
                                </Row>
                            )
                            break
                        case 'document':
                            Content = (
                                <div>
                                    
                                </div>
                            )
                            break
                        }

                        return (
                            <div className="_namespace">
                                <Layout>
                                    <Header>
                                        <Title gitlabUrl="http://gitlab.baidu.com/tb-component/mobile-reset/tree/master"
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
                