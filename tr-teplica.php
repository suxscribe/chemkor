<?php include 'header.php'; ?>

    <main>

        <div class="uk-container container-965 uk-margin-large-bottom">
            <h1 class="block-fullwidth-heading h1-titke">Теплицы</h1>
            <p class="uk-h3 resheniya-top-txt uk-text-center">Бытовые скважины – обсадные трубы, которые не влияют на вкус
                воды.</p>
        </div>

        <div class="uk-container container-1160 uk-margin-large-bottom uk-position-relative">

            <ul class="uk-tab uk-tab-grid uk-tab__obsadnyye" data-uk-switcher="{connect:'#obsadnyye'}">
                <li class="uk-width-1-1 uk-active"><a href="">Теплицы</a></li>
            </ul>

            <div id="obsadnyye" class="uk-switcher uk-margin-minus ">
                <div class="obsadnyye-block">
                    <img src="images/tr-teplica.jpg" alt="obsadnyye-truby-pic-full">

                    <div class="obsadnyye-add uk-hidden-small uk-hidden-medium" style="top:35%;left:50%;">
                        <button class="uk-button button-obsadnyye icon-plus" type="button" data-uk-toggle="{target:'#obsadnyye-info1'}"></button>
                        <div id="obsadnyye-info1" class="uk-hidden obsadnyye-add-content" style="top:95px;left:-200px;">
                            <button type="button" class="icon-plus obsadnyye-add-close" data-uk-toggle="{target:'#obsadnyye-info1'}"></button>
                            <img src="images/tr-teplica-fragment.jpg" alt="">
                            <p>Описание конструкции <br>
                                Комплектуются скважинными фильтрами и оголовками. Бурение скважин с применением труб ПВХ
                                позволяет избегать загрязнения подземных вод, а также увеличивает скорость бурения по сравнению
                                с металлическими и полиэтиленовыми трубами.</p>
                        </div>
                    </div><!-- .obsadnyye-add -->

                </div>
            </div>

            <div class="uk-hidden-large obsadnyye-info-mob">Обсадные трубы с трапецеидальной резьбой используются в строительстве и обустройстве водозаборных
                скважин при их бурении на воду. Комплектуются скважинными фильтрами и оголовками. Бурение скважин с
                применением труб ПВХ позволяет избегать загрязнения подземных вод, а также увеличивает скорость
                бурения по сравнению с металлическими и полиэтиленовыми трубами.
            </div>
        </div><!-- .uk-container -->

        <div class="uk-container container-1160 uk-margin-large-bottom padding-l-r-20">
            <div class="uk-h3 obsadnyye-title">Конструкция</div>

            <div class="uk-grid uk-grid-width uk-grid-width-medium-1-2 uk-grid-width-large-1-3 design-block-1" data-uk-grid-margin>
                <div>
                    <div class="design-content-1">
                        <p class="design-content-1-img">
                            <img src="images/obsadnyye-truby-icon-5.png" alt="">
                        </p>
                        <p class="design-content-1-txt">Диаметр d 90-400 мм</p>
                    </div>
                </div>
                <div>
                    <div class="design-content-1">
                        <p class="design-content-1-img">
                            <img src="images/obsadnyye-truby-icon-4.png" alt="">
                        </p>
                        <p class="design-content-1-txt">Глубина установки в скважине – до 300 м</p>
                    </div>
                </div>
                <div>
                    <div class="design-content-1">
                        <p class="design-content-1-img">
                            <img src="images/obsadnyye-truby-icon-1.png" alt="">
                        </p>
                        <p class="design-content-1-txt">Расчетное допускаемое напряжение – 100-125 МПа</p>
                    </div>
                </div>
                <div>
                    <div class="design-content-1">
                        <p class="design-content-1-img">
                            <img src="images/obsadnyye-truby-icon-3.png" alt="">
                        </p>
                        <p class="design-content-1-txt">Кольцевая жесткость трубы ПВХ 125(5,0) = 21 кН/м² в 1,75 раза
                            выше кольцевой жесткости трубы ПНД 125(7,1)</p>
                    </div>
                </div>
                <div>
                    <div class="design-content-1">
                        <p class="design-content-1-img">
                            <img src="images/obsadnyye-truby-icon-2.png" alt="">
                        </p>
                        <p class="design-content-1-txt">Соединение – резьбовое.
                            Обсадные трубы из НПВХ с резьбой крепятся между собой по принципу «труба в трубу». При этом
                            виде соединения весь ствол скважины надежно защищается и вода в ней остается чистой, без
                            посторонних примесей. </p>
                    </div>
                </div>
            </div>
        </div>

	    <?php include 'include-block-komplekt-sistemy.php'; ?>

	    <?php include 'include-block-realizovannyye.php'; ?>

    </main>

<?php include 'footer.php'; ?>