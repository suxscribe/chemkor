<?php include 'header.php'; ?>

<main>
    <div class="request-block">
        <div class="request-title">Отправить заявку на продукцию</div>

        <div class="request-content">
            <input class="request-input-name" type="text" name="request-input-name">
            <label for="request-input-name">Ваше имя</label>
        </div>

        <div class="request-content">
            <input class="request-input-organization" type="text" name="request-input-organization">
            <label for="request-input-organization">Организация</label>
        </div>

        <div class="request-content">
            <input class="request-input-city" type="text" name="request-input-city">
            <label for="request-input-city">Город</label>
        </div>

        <div class="request-required">
            <div class="request-content">
                <input class="request-input-tel" type="tel" name="request-input-tel" required>
                <label for="request-input-tel">Телефон</label>
            </div>

            <div class="request-content">
                <input class="request-input-email" type="email" name="request-input-email" required>
                <label for="request-input-email">Почта</label>
            </div>
        </div>

        <div class="request-content">
            <textarea class="request-input-txt" name="request-input-txt"></textarea>
            <label for="request-input-txt">Сопроводительное письмо</label>
        </div>
        <input class="request-submit" type="submit" value="Отправить сообщение">
    </div>
</main>

<?php include 'footer.php'; ?>
