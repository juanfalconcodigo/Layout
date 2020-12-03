'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">proyect-layout documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-4b6d019cdd37d0655fe4a24e1b6ae22d"' : 'data-target="#xs-components-links-module-AppModule-4b6d019cdd37d0655fe4a24e1b6ae22d"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-4b6d019cdd37d0655fe4a24e1b6ae22d"' :
                                            'id="xs-components-links-module-AppModule-4b6d019cdd37d0655fe4a24e1b6ae22d"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link">AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CoreModule.html" data-type="entity-link">CoreModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CoreModule.html" data-type="entity-link">CoreModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/DocumentationModule.html" data-type="entity-link">DocumentationModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-DocumentationModule-0842b638a9d1b06bfa45718d16ae3bcc"' : 'data-target="#xs-components-links-module-DocumentationModule-0842b638a9d1b06bfa45718d16ae3bcc"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-DocumentationModule-0842b638a9d1b06bfa45718d16ae3bcc"' :
                                            'id="xs-components-links-module-DocumentationModule-0842b638a9d1b06bfa45718d16ae3bcc"' }>
                                            <li class="link">
                                                <a href="components/DocumentationComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DocumentationComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/DocumentationRoutingModule.html" data-type="entity-link">DocumentationRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/GuardModule.html" data-type="entity-link">GuardModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/HomeModule.html" data-type="entity-link">HomeModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-HomeModule-0da863c281eb085a2692ada000501ea8"' : 'data-target="#xs-components-links-module-HomeModule-0da863c281eb085a2692ada000501ea8"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-HomeModule-0da863c281eb085a2692ada000501ea8"' :
                                            'id="xs-components-links-module-HomeModule-0da863c281eb085a2692ada000501ea8"' }>
                                            <li class="link">
                                                <a href="components/HomeComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HomeComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/HomeRoutingModule.html" data-type="entity-link">HomeRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/InboxModule.html" data-type="entity-link">InboxModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-InboxModule-e152f4785163da4739af2ff3aa880d2f"' : 'data-target="#xs-components-links-module-InboxModule-e152f4785163da4739af2ff3aa880d2f"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-InboxModule-e152f4785163da4739af2ff3aa880d2f"' :
                                            'id="xs-components-links-module-InboxModule-e152f4785163da4739af2ff3aa880d2f"' }>
                                            <li class="link">
                                                <a href="components/InboxComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">InboxComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/InboxRoutingModule.html" data-type="entity-link">InboxRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/MenuModule.html" data-type="entity-link">MenuModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/NotificationModule.html" data-type="entity-link">NotificationModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/PortalModule.html" data-type="entity-link">PortalModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ServiceModule.html" data-type="entity-link">ServiceModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-ServiceModule-85d1bea9547d49435207c385300e71ed"' : 'data-target="#xs-injectables-links-module-ServiceModule-85d1bea9547d49435207c385300e71ed"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ServiceModule-85d1bea9547d49435207c385300e71ed"' :
                                        'id="xs-injectables-links-module-ServiceModule-85d1bea9547d49435207c385300e71ed"' }>
                                        <li class="link">
                                            <a href="injectables/FeedbackService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>FeedbackService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/PortalService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>PortalService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/SettingModule.html" data-type="entity-link">SettingModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SettingModule-2e5364bf68e4fadb0d1d35c6bb95834b"' : 'data-target="#xs-components-links-module-SettingModule-2e5364bf68e4fadb0d1d35c6bb95834b"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SettingModule-2e5364bf68e4fadb0d1d35c6bb95834b"' :
                                            'id="xs-components-links-module-SettingModule-2e5364bf68e4fadb0d1d35c6bb95834b"' }>
                                            <li class="link">
                                                <a href="components/SettingComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SettingComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SettingRoutingModule.html" data-type="entity-link">SettingRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link">SharedModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SharedModule-ebb48e87b26f0ab20135b958c88d878b"' : 'data-target="#xs-components-links-module-SharedModule-ebb48e87b26f0ab20135b958c88d878b"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SharedModule-ebb48e87b26f0ab20135b958c88d878b"' :
                                            'id="xs-components-links-module-SharedModule-ebb48e87b26f0ab20135b958c88d878b"' }>
                                            <li class="link">
                                                <a href="components/HeaderComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HeaderComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link">SharedModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SharedModule-7e30507118b3eb373674e6887de73a81-1"' : 'data-target="#xs-components-links-module-SharedModule-7e30507118b3eb373674e6887de73a81-1"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SharedModule-7e30507118b3eb373674e6887de73a81-1"' :
                                            'id="xs-components-links-module-SharedModule-7e30507118b3eb373674e6887de73a81-1"' }>
                                            <li class="link">
                                                <a href="components/AdditionalComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AdditionalComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BreadcrumbComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">BreadcrumbComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ContentComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ContentComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ExtraComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ExtraComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoadingComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LoadingComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MessageComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MessageComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link">SharedModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SharedModule-5196e2a7318356b4389d1f307bf4a5fa-2"' : 'data-target="#xs-components-links-module-SharedModule-5196e2a7318356b4389d1f307bf4a5fa-2"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SharedModule-5196e2a7318356b4389d1f307bf4a5fa-2"' :
                                            'id="xs-components-links-module-SharedModule-5196e2a7318356b4389d1f307bf4a5fa-2"' }>
                                            <li class="link">
                                                <a href="components/SidebarComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SidebarComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/UserModule.html" data-type="entity-link">UserModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/UtilsModule.html" data-type="entity-link">UtilsModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-UtilsModule-634be1bf494e0d9e62809ddb771e8c2e"' : 'data-target="#xs-injectables-links-module-UtilsModule-634be1bf494e0d9e62809ddb771e8c2e"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UtilsModule-634be1bf494e0d9e62809ddb771e8c2e"' :
                                        'id="xs-injectables-links-module-UtilsModule-634be1bf494e0d9e62809ddb771e8c2e"' }>
                                        <li class="link">
                                            <a href="injectables/NotificationUtil.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>NotificationUtil</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ViewsModule.html" data-type="entity-link">ViewsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ViewsModule-d22dced4b89b153f7cf5dbf88e757e4f"' : 'data-target="#xs-components-links-module-ViewsModule-d22dced4b89b153f7cf5dbf88e757e4f"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ViewsModule-d22dced4b89b153f7cf5dbf88e757e4f"' :
                                            'id="xs-components-links-module-ViewsModule-d22dced4b89b153f7cf5dbf88e757e4f"' }>
                                            <li class="link">
                                                <a href="components/PortalViewComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PortalViewComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ViewsModule.html" data-type="entity-link">ViewsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ViewsModule-6018b8d36a4b7fc06ea99b33183edcd7-1"' : 'data-target="#xs-components-links-module-ViewsModule-6018b8d36a4b7fc06ea99b33183edcd7-1"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ViewsModule-6018b8d36a4b7fc06ea99b33183edcd7-1"' :
                                            'id="xs-components-links-module-ViewsModule-6018b8d36a4b7fc06ea99b33183edcd7-1"' }>
                                            <li class="link">
                                                <a href="components/MenuViewComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MenuViewComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ViewsModule.html" data-type="entity-link">ViewsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ViewsModule-03e64399e4a1dbe12dfca7117c19dfc3-2"' : 'data-target="#xs-components-links-module-ViewsModule-03e64399e4a1dbe12dfca7117c19dfc3-2"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ViewsModule-03e64399e4a1dbe12dfca7117c19dfc3-2"' :
                                            'id="xs-components-links-module-ViewsModule-03e64399e4a1dbe12dfca7117c19dfc3-2"' }>
                                            <li class="link">
                                                <a href="components/NotificationViewComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NotificationViewComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ViewsModule.html" data-type="entity-link">ViewsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ViewsModule-919c3b6f5b989e3f1bc82b70519ee5e9-3"' : 'data-target="#xs-components-links-module-ViewsModule-919c3b6f5b989e3f1bc82b70519ee5e9-3"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ViewsModule-919c3b6f5b989e3f1bc82b70519ee5e9-3"' :
                                            'id="xs-components-links-module-ViewsModule-919c3b6f5b989e3f1bc82b70519ee5e9-3"' }>
                                            <li class="link">
                                                <a href="components/UserViewComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">UserViewComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ViewsRoutingModule.html" data-type="entity-link">ViewsRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ViewsRoutingModule.html" data-type="entity-link">ViewsRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ViewsRoutingModule.html" data-type="entity-link">ViewsRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ViewsRoutingModule.html" data-type="entity-link">ViewsRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/CustomHammerConfig.html" data-type="entity-link">CustomHammerConfig</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/FeedbackService.html" data-type="entity-link">FeedbackService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/NotificationUtil.html" data-type="entity-link">NotificationUtil</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PortalService.html" data-type="entity-link">PortalService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interceptors-links"' :
                            'data-target="#xs-interceptors-links"' }>
                            <span class="icon ion-ios-swap"></span>
                            <span>Interceptors</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="interceptors-links"' : 'id="xs-interceptors-links"' }>
                            <li class="link">
                                <a href="interceptors/InterceptorInterceptor.html" data-type="entity-link">InterceptorInterceptor</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/PortalGuard.html" data-type="entity-link">PortalGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/AppState.html" data-type="entity-link">AppState</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/InboxState.html" data-type="entity-link">InboxState</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PortalState.html" data-type="entity-link">PortalState</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});