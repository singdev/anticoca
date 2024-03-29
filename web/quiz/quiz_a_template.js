const template_a = `
            <div class="question">
                <h1>Connaissez-vous les textes de lois/règlementations qui préviennent et répriment les actes de
                    corruption ?</h1>
                <div class="responses">
                    <div class="form-group">
                        <input type="radio" id="oui" name="text_lois" value="oui">
                        <label for="oui">Oui (je connais tous)</label>
                    </div>
                    <div class="form-group">
                        <input type="radio" id="un_peu" name="text_lois" value="un_peu">
                        <label for="un_peu">Peut-être (quelques textes seulement)</label>
                    </div>
                    <div class="form-group">
                        <input type="radio" id="non" name="text_lois" value="non">
                        <label for="non">Non (je n’ai aucune connaissance de base sur textes de lois sur la corruption)
                        </label>
                    </div>
                </div>
            </div>

            <div class="question">
                <h1>Connaissez les principaux domaines que couvrent ces textes législatifs en matière de prévention et
                    de lutte contre la corruption </h1>
                <div class="responses">
                    <div class="form-group">
                        <input type="radio" id="oui-1" name="domaines" value="prop">
                        <label for="oui-1">Oui</label>
                    </div>
                    <div class="form-group">
                        <input type="radio" id="non-1" name="domaines" value="non">
                        <label for="non-1">Non</label>
                    </div>
                </div>
                <div class="propositions">
                    <h2>cochez sur cette liste les domaines couverts par les lois sur la prévention et la répression de
                        la
                        corruption au Gabon</h2>
                    <h3>A propos de la prévention</h3>
                    <div class="form-group">
                        <input type="checkbox" name="prop" id="p1" value="0">
                        <label for="p1">Des codes de conduite des agents publics </label>
                    </div>
                    <div class="form-group">
                        <input type="checkbox" name="prop" id="p2" value="1">
                        <label for="p2">De l’institution de la déclaration d’intérêt et de patrimoine </label>
                    </div>
                    <div class="form-group">
                        <input type="checkbox" name="prop" id="p3" value="2">
                        <label for="p3">De l’obligation de déclaration des dons, cadeaux et autres avantages en nature
                            reçus
                            dans l’exercice des fonctions </label>
                    </div>
                    <div class="form-group">
                        <input type="checkbox" name="prop" id="p4" value="3">
                        <label for="p4">De la prévention de la corruption dans le cadre des transactions
                            commerciales</label>
                    </div>

                    <h3>A propos la sanction et de la répression</h3>
                    <div class="form-group">
                        <input type="checkbox" name="prop" id="p5" value="4">
                        <label for="p5">Des incriminations et des sanctions des actes de corruption – des agents
                            publics</label>
                    </div>
                    <div class="form-group">
                        <input type="checkbox" name="prop" id="p6" value="5">
                        <label for="p6">De la corruption dans les commandes publiques (marchés publics et délégations de
                            services publics)</label>
                    </div>
                    <div class="form-group">
                        <input type="checkbox" name="prop" id="p7" value="6">
                        <label for="p7">De la soustraction de biens par un agent public </label>
                    </div>
                    <div class="form-group">
                        <input type="checkbox" name="prop" id="p8" value="7">
                        <label for="p8">De la concussion </label>
                    </div>
                    <div class="form-group">
                        <input type="checkbox" name="prop" id="p9" value="8">
                        <label for="p9">Du trafic d’influence</label>
                    </div>
                    <div class="form-group">
                        <input type="checkbox" name="prop" id="p10" value="9">
                        <label for="p10">De l’abus de fonctions</label>
                    </div>
                    <div class="form-group">
                        <input type="checkbox" name="prop" id="p11" value="10">
                        <label for="p11">De la surfacturation</label>
                    </div>
                    <div class="form-group">
                        <input type="checkbox" name="prop" id="p12" value="11">
                        <label for="p12">Du népotisme</label>
                    </div>
                    <div class="form-group">
                        <input type="checkbox" name="prop" id="p13" value="12">
                        <label for="p13">Du favoritisme</label>
                    </div>
                    <div class="form-group">
                        <input type="checkbox" name="prop" id="p14" value="13">
                        <label for="p14"> </label>
                    </div>
                    <div class="form-group">
                        <input type="checkbox" name="prop" id="p15" value="14">
                        <label for="p15">Du détournement de biens publics</label>
                    </div>
                    <div class="form-group">
                        <input type="checkbox" name="prop" id="p16" value="15">
                        <label for="p16">Du conflit d’intérêt </label>
                    </div>
                    <div class="form-group">
                        <input type="checkbox" name="prop" id="p17" value="16">
                        <label for="p17">De la prise illégale d’intérêts </label>
                    </div>
                    <div class="form-group">
                        <input type="checkbox" name="prop" id="p18" value="17">
                        <label for="p18">De la simulation illicite </label>
                    </div>
                    <div class="form-group">
                        <input type="checkbox" name="prop" id="p19" value="18">
                        <label for="p19">Du délit d’apparence</label>
                    </div>
                    <div class="form-group">
                        <input type="checkbox" name="prop" id="p20" value="19">
                        <label for="p20">Du délit d’initié </label>
                    </div>
                    <div class="form-group">
                        <input type="checkbox" name="prop" id="p21" value="20">
                        <label for="p21">De la divulgation d’informations </label>
                    </div>
                    <div class="form-group">
                        <input type="checkbox" name="prop" id="p22" value="21">
                        <label for="p22">Du financement occulte des partis politiques</label>
                    </div>
                    <div class="form-group">
                        <input type="checkbox" name="prop" id="p23" value="22">
                        <label for="p23">De la corruption et de la fraude électorales</label>
                    </div>
                    <div class="form-group">
                        <input type="checkbox" name="prop" id="p24" value="23">
                        <label for="p24">De la corruption dans le secteur privé </label>
                    </div>
                    <div class="form-group">
                        <input type="checkbox" name="prop" id="p25" value="24">
                        <label for="p25">De l’entrave au bon fonctionnement de la justice </label>
                    </div>
                    <div class="form-group">
                        <input type="checkbox" name="prop" id="p26" value="25">
                        <label for="p26">De la protection des témoins, experts, dénonciateurs et victimes</label>
                    </div>
                    <div class="form-group">
                        <input type="checkbox" name="prop" id="p27" value="26">
                        <label for="p27">De la dénonciation calomnieuse ou abusive de corruption ou d’actes de
                            corruption</label>
                    </div>
                    <div class="form-group">
                        <input type="checkbox" name="prop" id="p28" value="27">
                        <label for="p28">De la non dénonciation des infractions</label>
                    </div>
                    <div class="form-group">
                        <input type="checkbox" name="prop" id="p29" value="28">
                        <label for="p29">Du gel, de la saisie et de la confiscation </label>
                    </div>

                    <h3>A propose de la coopération </h3>
                    <div class="form-group">
                        <input type="checkbox" name="prop" id="p30" value="29">
                        <label for="p30">De l’entraide judiciaire</label>
                    </div>
                    <div class="form-group">
                        <input type="checkbox" name="prop" id="p31" value="30">
                        <label for="p31">De la prévention, détection et du transfert du produit du crime </label>
                    </div>
                    <div class="form-group">
                        <input type="checkbox" name="prop" id="p32" value="31">
                        <label for="p32">De la communication d’informations </label>
                    </div>
                    <div class="form-group">
                        <input type="checkbox" name="prop" id="p33" value="32">
                        <label for="p33">Des relations avec les banques et les institutions financières </label>
                    </div>
                    <div class="form-group">
                        <input type="checkbox" name="prop" id="p34" value="33">
                        <label for="p34">Du compte financier domicilié à l’étranger </label>
                    </div>
                    <div class="form-group">
                        <input type="checkbox" name="prop" id="p35" value="34">
                        <label for="p35">Du recouvrement des avoirs</label>
                    </div>
                </div>
            </div>

            <div class="question">
                <h1>Parmi les conventions et chartes internationales, lesquels le Gabon est-il signataire ou
                    Etat-partie ?</h1>
                <div class="responses">
                    <div class="form-group">
                        <input type="checkbox" id="convention1" name="conventions" value="0">
                        <label for="convention1">Convention des Nations Unies contre la corruption (CNUCC)</label>
                    </div>
                    <div class="form-group">
                        <input type="checkbox" id="convention2" name="conventions" value="1">
                        <label for="convention2">Convention de l’Union Africaine sur la prévention et la Lutte
                            contre la
                            corruption et des pratiques assimilées</label>
                    </div>
                    <div class="form-group">
                        <input type="checkbox" id="convention3" name="conventions" value="2">
                        <label for="convention3">Convention Internationale de lutte la corruption de l’OCDE</label>
                    </div>
                    <div class="form-group">
                        <input type="checkbox" id="convention4" name="conventions" value="3">
                        <label for="convention4">Charte Africaine sur la démocratie, les élections et la
                            gouvernance</label>
                    </div>
                    <div class="form-group">
                        <input type="checkbox" id="convention5" name="conventions" value="4">
                        <label for="convention5">Charte africaine sur les valeurs et principes du service public et
                            de
                            l'administration</label>
                    </div>
                    <div class="form-group">
                        <input type="checkbox" id="convention6" name="conventions" value="5">
                        <label for="convention6">Charte africaine sur les valeurs et principes de la
                            décentralisation,
                            la gouvernance locale et le développement local</label>
                    </div>
                    <div class="form-group">
                        <input type="checkbox" id="convention7" name="conventions" value="6">
                        <label for="convention7">Directives sur le nouveau cadre harmonisé de la CEMAC</label>
                    </div>
                </div>
            </div>

            <div class="question">
                <h1>La législation sur la corruption et l’intégrité du service public est-elle bien appliquée selon
                    vous ?</h1>
                <div class="responses">
                    <div class="form-group">
                        <input type="radio" id="oui-18" name="application_gabon" value="oui">
                        <label for="oui-18">Oui</label>
                    </div>
                    <div class="form-group">
                        <input type="radio" id="non-18" name="application_gabon" value="non">
                        <label for="non-18">Non</label>
                    </div>
                    <div class="form-group">
                        <input type="radio" id="sait_pas" name="application_gabon" value="sait_pas">
                        <label for="sait_pas">Ne sais pas</label>
                    </div>
                </div>
            </div>

            <div class="question">
                <h1>Sur le code des marchés publics au Gabon Selon vous le code en vigueur garantit-il l’effectivité des
                    principes suivants :</h1>
                <div class="response">
                    <div class="form-group">
                        <input type="checkbox" id="box1" name="marche_public" value="0">
                        <label for="box1">L’égalité de traitement des soumissionnaires ;</label>
                    </div>
                    <div class="form-group">
                        <input type="checkbox" id="box2" name="marche_public" value="1">
                        <label for="box2">La liberté d’accès à la commande publique ;</label>
                    </div>
                    <div class="form-group">
                        <input type="checkbox" id="box3" name="marche_public" value="2">
                        <label for="box3">La transparence des procédures ;</label>
                    </div>
                    <div class="form-group">
                        <input type="checkbox" id="box4" name="marche_public" value="3">
                        <label for="box4">L’efficacité de la commande publique.</label>
                    </div>
                </div>

            </div>
`;