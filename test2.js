                    if ((location.port || !location.host) && !id) {
                        fetch('./project1.sb3').then(r => r.blob()).then(blob => {
                            const reader = new FileReader();
                            reader.onload = () => {
                                that.props.onFetchedProjectData(reader.result, that.props.loadingState);
                            };
                            reader.readAsArrayBuffer(blob);
                        })
                        return;
                    }

                    try {
                        let v = getQueryString('v');
                        try {
                            d = workinfo;
                        } catch (error) {
                            window.workinfo = d = await getworkinfosync(id);
                            userdetail = await getuserinfosync()
                        }
                        try {
                            $('.input_input-form_2EIqD.project-title-input_title-field_13MIs.menu-bar_title-field-growable_2DAmE').val(d.name)
                            setTimeout(() => {
                                $('.input_input-form_2EIqD.project-title-input_title-field_13MIs.menu-bar_title-field-growable_2DAmE').val(d.name)
                            }, 5000);
                        } catch (error) {
                            console.log(error);
                        }
                        if (location.pathname.indexOf('editor.html') != -1) {
                            if (d === undefined) {
                                alert(window.$t('code8.site.test2.5sayc8xw6bk0'))
                                $(document).text(window.$t('code8.site.test2.5sayc8xw6bk0'))
                                throw (window.$t('code8.site.test2.5sayc8xw6bk0'))
                            }
                            if (!d.issign) {
                                toLogin()
                                alert(window.$t('code8.site.test2.5sayc8xwa7k0'))
                                $(document).text(window.$t('code8.site.test2.5sayc8xwa7k0'))
                                location.href = "/#page=sign"
                                throw (window.$t('code8.site.test2.5sayc8xwa7k0'))
                            }
                            if (!(d.isauthor || ((d.opensource || userdetail && userdetail.is_admin) && d.publish))) {
                                alert(window.$t('code8.site.test2.5sayc8xwciw0'))
                                $(document).text(window.$t('code8.site.test2.5sayc8xwciw0'))
                                throw (window.$t('code8.site.test2.5sayc8xwciw0'))
                            }
                            if (d.isauthor) {
                                $('#app > div > div > div > div.gui_menu-bar-position_6ejza.menu-bar_menu-bar_1gLUp.box_box_tWy-0 > div.menu-bar_main-menu_EyCGw > div.menu-bar_author-info_3H1M3.author-info_author-info__Auzh').remove();
                            } else {
                                $('#app > div > div > div > div.gui_menu-bar-position_6ejza.menu-bar_menu-bar_1gLUp.box_box_tWy-0 > div.menu-bar_main-menu_EyCGw > div.menu-bar_menu-bar-item_264qQ > span:nth-child(2)').remove();
                                $('#app > div > div > div > div.gui_menu-bar-position_6ejza.menu-bar_menu-bar_1gLUp.box_box_tWy-0 > div.menu-bar_main-menu_EyCGw > div.menu-bar_menu-bar-item_264qQ > span:nth-child(2) > div').text(window.$t('code8.site.test2.5sayc8xwcts0'))
                                $('#app > div > div > div > div.gui_menu-bar-position_6ejza.menu-bar_menu-bar_1gLUp.box_box_tWy-0 > div.menu-bar_main-menu_EyCGw > div.menu-bar_menu-bar-item_264qQ.menu-bar_growable_gzAFf').remove();
                                $('#app > div > div > div > div.gui_menu-bar-position_6ejza.menu-bar_menu-bar_1gLUp.box_box_tWy-0 > div.menu-bar_main-menu_EyCGw > div.menu-bar_author-info_3H1M3.author-info_author-info__Auzh > div > div > span > span').text(d.nickname)
                                $('#app > div > div > div > div.gui_menu-bar-position_6ejza.menu-bar_menu-bar_1gLUp.box_box_tWy-0 > div.menu-bar_main-menu_EyCGw > div.menu-bar_author-info_3H1M3.author-info_author-info__Auzh > img')[0].src = 'https://api.code8.site/static/' + d.head;
                            }
                            location.href = "#id=" + d.id + (v ? '&v=' + v : '')
                        }
                        if (d.onlyFirefox && navigator.userAgent.indexOf("Firefox") == -1) {
                            alert(window.$t('code8.site.test2.5sayc8xwd000'))
                            throw new Error(window.$t('code8.site.test2.5sayc8xwd5s0'))
                        }
                        var toLogin = () => {
                            if (location.hash.startsWith('#page=sign&url='))
                                location.href = '/' + location.hash
                        }
                        toLogin()
                        window.onhashchange = toLogin
                        fetch('https://api.code8.site/api/work/work?id=' + id + '&token=' + getCookie('token')
                            + '&sha=' + getQueryString('sha')
                            + '&etime=' + getQueryString('etime')
                            + (v ? '&v=' + v : '')
                        ).then(r => r.blob()).then(blob => {

                            const reader = new FileReader();
                            reader.onload = () => {
                                if (d.raw || reader.result[0] == '{')
                                    that.props.onFetchedProjectData(reader.result, that.props.loadingState);
                                else
                                    that.props.onFetchedProjectData(Decrypt(reader.result), that.props.loadingState);
                                location.href = "#id=" + id + (v ? '&v=' + v : '')
                            };
                            if (d.raw)
                                reader.readAsArrayBuffer(blob);
                            else
                                reader.readAsText(blob);
                        }).catch(e => {
                            console.log(e)
                            fetch('https://api.code8.site/static/p.sb3').then(r => r.blob()).then(blob => {
                                const reader = new FileReader();
                                reader.onload = () => {
                                    that.props.onFetchedProjectData(reader.result, that.props.loadingState);
                                };
                                reader.readAsArrayBuffer(blob);
                            })
                        });

                    } catch (error) {
                        console.log(error)
                        window.fetchProject(window.props.reduxProjectId, window.props.loadingState);
                        alert(window.$t('code8.site.test2.5sayc8xwdao0'))

                    }